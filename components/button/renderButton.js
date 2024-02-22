export function renderButton(title, func, className) {
    function onClickhandler() {
        func()
    }
    const button = document.createElement('button')
    button.append(title)
    button.className = className
    button.addEventListener('click', onClickhandler)
    return button

}