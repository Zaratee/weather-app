interface IProps{
    children: React.ReactNode,
}

export const UserContainer = (props : IProps) => {
    const {children} = props
    return (
        <div className="user-container">{children}</div>
    )
}

