export const msgOk = (res, httpStatus, message, objectData) => {
    return (
        res.status(httpStatus)
            .json({
                message,
                data: objectData
            })
    )
}