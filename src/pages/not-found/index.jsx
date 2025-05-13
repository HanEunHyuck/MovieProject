const NotFoundPage = () => (
  <>
    <div className="flex h-screen flex-col items-center justify-center gap-10 px-14 dark:bg-neutral-800">
      <h2 className="text-3xl font-bold dark:text-neutral-50">
        404 <span className="text-violet-600 dark:text-violet-400">ERROR</span>
      </h2>
      <p className="text-xl font-bold dark:text-neutral-50">페이지를 찾을 수 없습니다 !</p>
    </div>
  </>
);

export default NotFoundPage;
