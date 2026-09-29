export const ItemCounter = ({ name }) => {
    return (
        <section style={{
            display: "flex",
            alignItems: "center",
            gap: 10
        }}>
            <span style={{
                width: 150
            }}>{ name }</span>
            <button>+</button>
            <span>10</span>
            <button>-</button>
        </section>
    )
}
