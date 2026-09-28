export const ItemCounter = () => {
    return (
        <section style={{
            display: "flex",
            alignItems: "center",
            gap: 10
        }}>
            <span style={{
                width: 150
            }}>Nintendo Swtch 2</span>
            <button>+</button>
            <span>10</span>
            <button>-</button>
        </section>
    )
}
