import React, { useRef, useState } from 'react'

export default function PageBodyCopy() {
    const [currentPage, setCurrentPage] = useState(1);
    const [isScrolling, setIsScrolling] = useState(false);
    const maxPages = 2;
    const content1Ref = useRef()
    const content2Ref = useRef()

    const manualScroll = (pageNumber) => {
        switch (pageNumber) {
            case 1:
                content1Ref.current.scrollIntoView({ behavior: 'smooth' })
                break;
            case 2:
                content2Ref.current.scrollIntoView({ behavior: 'smooth' })
                break;
            default:
                break;
        }

    }

    const onScroll = (ref) => {
        if (!isScrolling) {
            const scrolledAmount = ref.current.scrollTop
            const contentHeight = ref.current.scrollHeight;
            const componentHeight = ref.current.clientHeight
            const endingScrollPosiion = contentHeight - componentHeight;
    
            let scrollTo = "";
            if (scrolledAmount === 0) {
                // console.log('hit the top')
                scrollTo = "top";
            }
            else if (scrolledAmount === endingScrollPosiion) {
                // console.log('hit the bottom')
                scrollTo = "bottom";
            }
    
            if (scrollTo && currentPage > 0 && currentPage < maxPages + 1) {
                if (scrollTo === "bottom") {
                    if (currentPage < maxPages) {
                        setIsScrolling(true)
                        setTimeout(() => {
                            setIsScrolling(false)
                        }, 500);
                        manualScroll(currentPage + 1)
                        setCurrentPage(currentPage + 1);
                    }
                }
                else if (scrollTo === "top") {
                    console.log('here')
                    if (currentPage > 1) {
                        setIsScrolling(true)
                        setTimeout(() => {
                            setIsScrolling(false)
                        }, 500);
                        manualScroll(currentPage - 1)
                        setCurrentPage(currentPage - 1);
                    }
                }
            }
            console.log('currentPage', currentPage)
        }
    }

    return (
        <div className="appBody">
            <div  ref={content1Ref} onScroll={() => { onScroll(content1Ref) }}  className="appBodyContent1">
                <div className="haha">content 1 here</div>
            </div>
            <div  ref={content2Ref} onScroll={() => { onScroll(content2Ref) }}  className="appBodyContent2">
                <div className="haha">content 2 here</div>
            </div>
            <div  className="appBodyContent3">
                <div className="haha">content 3 here</div>
            </div>
        </div>
    )
}
