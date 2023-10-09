<script>
    export let form;
</script>

<article>
    <h1>로그인</h1>
    {#if form?.error}
        <p class="error">{form.error}</p>
    {/if}
    <form method="POST">
        <input type="email" name="email"
        placeholder="이메일" required>
        <input type="password" name="password"
        placeholder="비밀번호" required>
        <button type="submit">로그인</button>
    </form>
</article>