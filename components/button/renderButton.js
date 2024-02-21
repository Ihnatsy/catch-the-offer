export function renderButton(title, func) {
    function onClickhandler() {
        func()
    }
    const button = document.createElement('button')
    button.append(title)
    button.addEventListener('click', onClickhandler)
    return button

}