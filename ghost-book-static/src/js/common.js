$(() => {
    layui.util.on('lay-on', {
        hello: () => {
            layui.layer.msg('Hello World')
        }
    })

    window.Prism = window.Prism || {}
    window.Prism.manual = false
})
