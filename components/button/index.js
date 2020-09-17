import { colors } from "../../styles/theme";

export default function Button({children, onClick}){
    return(
        <>
        <button onClick={onClick}>
            {children}
        </button>
        <style jsx>{`
            button {
                background: ${colors.fourd};
                border: 0;
                color: #fff;
                border-radius: 9999px;
                font-weight: 700;
                padding: 8px 24px;
                cursor: pointer;
                transition: opacity .3s ease;
                display: flex;
                align-items: center;
            }

            button > :global(svg){
                margin-right: 10px;
            }

            button:hover{
                opacity: .7;
                color: ${colors.firt}
            }

        `}</style>
        </>
    )
}