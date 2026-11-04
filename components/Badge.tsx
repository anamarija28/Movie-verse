

export function Badge({
    variant,
    children
} : {
    variant?: "default" | "brand" | "success" | "neutral";
    children: React.ReactNode;
}) {
    const className = variant === "brand" ? "badge badge--brand" // Ako 'variant' e 'brand', togas ke bidi - "badge badge--brand" klasa
                    : variant === "success" ? "badge badge--success" // Ako 'variant' e 'success', togas ke bidi - "badge badge--success" klasa
                    : variant === "neutral" ?  "badge badge--neutral"             
                    : "badge"; // Ako nema nisto togas e "badge"
    
    
    return <span className={className}>{children}</span>
    
}