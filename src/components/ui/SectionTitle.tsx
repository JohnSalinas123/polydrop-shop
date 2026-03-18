
interface SectionTitleProps {
    text: string;
}

export const SectionTitle = ({
    text
}: SectionTitleProps) => {
    return (
        <>
            <h2 className="section-title">{text}</h2>   
        </>
    )
}   