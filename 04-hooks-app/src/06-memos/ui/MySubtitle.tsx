import React from "react";

interface Props {
    subtitle: string;
}

export const MySubtitle = React.memo(({ subtitle }: Props) => {
    console.log('MySubtitle re-render');
    return (
        <>
            <h6>{subtitle}</h6>

            <button className="bg-blue-500 text-white px-2 py-1 rounded-md cursor-pointer">
                Llamar a función
            </button>
        </>
    );
});
