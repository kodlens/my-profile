export default function Desktop(
    { height, width, fill } :
    { height:string, width:string, fill:string}
) {
    return (
        <>
            <svg width={width}
                height={height}
                viewBox="-0.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" 
                    fill-rule="evenodd">
                    <g id="Icon-Set" transform="translate(-568.000000, -463.000000)" 
                        fill={fill}>
                        <path d="M597,481 L570,481 L570,467 C570,465.896 570.896,465 572,465 L595,465 C596.104,465 597,465.896 597,467 L597,481 L597,481 Z M597,485 C597,486.104 596.104,487 595,487 L572,487 C570.896,487 570,486.104 570,485 L570,483 L597,483 L597,485 L597,485 Z M582,489 L586,489 L586,493 L582,493 L582,489 Z M595,463 L572,463 C569.791,463 568,464.791 568,467 L568,485 C568,487.209 569.791,489 572,489 L580,489 L580,493 L578,493 C577.447,493 577,493.448 577,494 C577,494.553 577.447,495 578,495 L590,495 C590.553,495 591,494.553 591,494 C591,493.448 590.553,493 590,493 L588,493 L588,489 L595,489 C597.209,489 599,487.209 599,485 L599,467 C599,464.791 597.209,463 595,463 L595,463 Z">
                        </path>
                    </g>
                </g>
            </svg>
        </>
    )
}



