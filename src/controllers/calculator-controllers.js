export const calculate = async (req, res) => {
    try {
        if (!req.body || typeof req.body !== 'object') {
            return res.status(400).json({
                message: "Invalid request body"
            });
        }

        const { a, b } = req.body;

        if (typeof a === 'undefined' || typeof b === 'undefined') {
            return res.status(400).json({
                message: "Both 'a' and 'b' should be provided"
            });
        }

        const result = a + b;

        return res.status(200).json({
            message: "Calculation successful",
            result
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};
