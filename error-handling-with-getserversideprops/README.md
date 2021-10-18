# Error Handling With getServerSideProps

커스텀 에러 페이지 `_error.tsx`를 만들었다면 커스텀 `/404` 페이지를 만들어야 합
니다. 커스텀 404 페이지를 만들지 않을 경우 아래와 같은 warning이 나타나게 됩니다
. ([참고 링크](https://nextjs.org/docs/messages/custom-error-no-custom-404))

```
Warning: You have added a custom /_error page without a custom /404 page. This prevents the 404 page from being auto statically optimized.
```
