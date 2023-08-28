export const errorResp = (res, httpStatus, msg) => {
    return (
        res.status(httpStatus)
            .json({
                error: msg
            })
    );
};


