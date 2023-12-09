export default {
    root: ({ context }) => ({
        class: [
            "font-sans px-5 py-2 font-medium",

            // Colors
            "bg-white/10 text-white border border-transparent",
            "placeholder:text-white/60",

            // States
            {
                "hover:border-white/40": !context.disabled,
                "focus:outline-none focus:bg-white/20": !context.disabled,
                "bg-white/10 select-none pointer-events-none cursor-default":
                    context.disabled,
            },

            // Misc
            "rounded-full",
            "transition-colors duration-300",
        ],
    }),
};
