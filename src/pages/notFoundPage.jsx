export const NotFoundPage = () => {
  return (
    <>
      <section className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex w-[100vw] items-center justify-center space-x-4">
          <span className="text-2xl font-semibold text-black">404</span>
          <span>This page could not be found.</span>
        </div>
      </section>
    </>
  );
};
