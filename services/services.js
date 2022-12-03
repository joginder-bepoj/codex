import axios from "axios";
export const issue = async () => {
    try {
        const res = await axios.get(
            `${process.env.NEXT_APP_API_URL}/getIssue`,
            {
                headers: {
                    "X-API-KEY": process.env.NEXT_APP_API_KEY,
                }
            }
        )
        return res.data
    } catch (err) {
        console.log(err);
    }
};

export const blogs = async () => {
    try {
        const res = await axios.get(`${process.env.NEXT_APP_API_URL}/getBlogs`, {
            headers: {
                "X-API-KEY": process.env.NEXT_APP_API_KEY,
            }
        })
        return res.data
    } catch (err) {
        console.log(err)
    }
};

export const skills = async () => {
    try {
        const res = await axios.get(
            `${process.env.NEXT_APP_API_URL}/getAllSkill`,
            {
                headers: {
                    "X-API-KEY": process.env.NEXT_APP_API_KEY,
                },
            }
        );
        return res.data;
    } catch (err) {
        console.log(err);
    }
};