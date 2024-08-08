'use client';

const Hero = () => {
  return (
    <section>
      <div className="relative mx-auto min-h-screen max-w-6xl px-4 sm:px-6">
        <div className="pb-16 pt-32 md:pb-32 md:pt-52">
          {/* Hero content */}
          <div className="container mx-auto text-center">
            <div className="mb-6">
              <div className="relative inline-flex before:absolute before:inset-0">
                <span className="relative inline-flex items-center">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Coming Soon ⚡️
                  </div>
                </span>
              </div>
            </div>
            <h1 className="pb-4 text-7xl font-extrabold tracking-tight lg:text-8xl">
              {'landing.title'}
            </h1>
            <p className="mb-8 text-lg">{'landing.subtitle'}</p>
            <div className="mx-auto flex max-w-xs flex-col items-center gap-4 sm:inline-flex sm:max-w-none sm:flex-row sm:justify-center"></div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-r from-[#3FAFAF] to-[#4AB0B0] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
