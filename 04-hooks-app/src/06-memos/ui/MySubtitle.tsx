import React from "react";

interface Props {
    subtitle: string;
    callMyAPI: () => void;
}

export const MySubtitle = React.memo(({ subtitle, callMyAPI }: Props) => {
    console.log('MySubtitle re-render');
    return (
        <>
            <h6>{subtitle}</h6>

            <button
                className="bg-blue-500 text-white px-2 py-1 rounded-md cursor-pointer"
                onClick={callMyAPI}>
                Llamar a función
            </button>
        </>
    );
});
