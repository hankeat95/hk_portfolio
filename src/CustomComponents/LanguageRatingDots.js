export default function LanguageRatingDots(props) {
    let totalDots = 5;
    let markedDots = props.highlightedDots;
    let renderedHTMl = [];
    for (let i = 0; i < totalDots; i++) {
        renderedHTMl.push(<div className={(i < markedDots ? "markedDots" : "normalDots") + " languageRatingDots"}></div>);
    }

    return renderedHTMl;
};
