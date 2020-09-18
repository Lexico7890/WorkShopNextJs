import { colors } from "../../styles/theme";

export default function Button({children, onClick, disabled}){
    return(
        <>
        <button disabled={disabled} onClick={onClick}>
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
                user-select: none;
            }

            button[disabled]{
                opacity: 0.2;
                pointer-events: none;
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