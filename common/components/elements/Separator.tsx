
export default function Separator(
    { horizontal, marginY, MarginX, isDisplay }: { horizontal: boolean, marginY?: string, MarginX?: string, isDisplay?: boolean }
) {
    return (
        <>
            {isDisplay && (
                <section className={horizontal === true ? `w-full h-px bg-muted ${marginY || 'my-4'}` : `h-full w-px bg-muted ${MarginX || 'mx-4'}`} />
            )}
        </>
        //can horizontal and vertical separator
    );
}