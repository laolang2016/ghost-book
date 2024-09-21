<template>
    <div>
        <div class="red">
            hello world
            <i class="fas fa-heart"></i>
        </div>
        <pre class="line-numbers" data-line="1,13-15"><code class="language-java">{{ code }}</code></pre>

        <lay-button type="primary">原始按钮</lay-button>
    </div>
</template>

<script lang="ts">
import Prism from 'prismjs'
import { onMounted } from "vue"
export default {

    setup() {
        const code = `package com.laolang.jx;

import java.util.concurrent.ExecutionException;
import java.util.concurrent.FutureTask;
import java.util.concurrent.TimeUnit;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class JucHelloApplication {
    public static void main(String[] args) {
        log.info("juc hello is running...");

        FutureTask<Integer> futureTask = new FutureTask<>(new SimpleCallable());
        Thread t1 = new Thread(futureTask, "t1");
        t1.start();

        int i = 0;
        while( i < 5 ){
            try {
                TimeUnit.SECONDS.sleep(2);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            log.info("主线程的某些任务");
            i++;
        }

        try {
            Integer ret = futureTask.get();
            log.info("线程计算结果:{}",ret);
        } catch (InterruptedException | ExecutionException e) {
            throw new RuntimeException(e);
        }

        i = 0;
        while( i < 5 ){
            try {
                TimeUnit.SECONDS.sleep(2);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            log.info("主线程的某些任务2");
            i++;
        }

        log.info("程序结束");
    }
}`
        onMounted(() => {
            Prism.highlightAll()
        })

        return {
            code
        }
    }
}
</script>

<style lang="scss">
.red {
    color: $baseColor;
}

code {
    border-left-width: 0 !important;
}
</style>