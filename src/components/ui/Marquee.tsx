/* Modification of MagicUI marquee */
import { type ComponentPropsWithoutRef } from "react"

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
    className?: string
    reverse?: boolean
    pauseOnHover?: boolean
    children: React.ReactNode
    vertical?: boolean
    repeat?: number
}

export function Marquee({
    className,
    reverse = false,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    ...props
}: MarqueeProps) {
    return (
        <div
            {...props}
            className={`marquee-root ${vertical ? "marquee-vertical" : "marquee-horizontal"} ${className ?? ""}`}
        >
            {Array(repeat)
                .fill(0)
                .map((_, i) => (
                    <div
                        key={i}
                        className={[
                            "marquee-inner",
                            vertical ? "marquee-inner--vertical" : "marquee-inner--horizontal",
                            pauseOnHover ? "marquee-pause-on-hover" : "",
                            reverse ? "marquee-reverse" : "",
                        ].join(" ")}
                    >
                        {children}
                    </div>
                ))}
        </div>
    )
}