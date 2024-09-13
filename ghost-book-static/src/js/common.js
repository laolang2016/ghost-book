$(() => {
    layui.util.on('lay-on', {
        hello: () => {
            layui.layer.msg('Hello World')
        }
    })
})
