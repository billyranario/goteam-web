<template>
  <div class="bg-white rounded shadow mb-4">
    <div class="p-4 border-b">
      <div class="flex items-center mb-1">
        <p class="text-lg font-semibold mr-auto">Welcome, Billy Joel!</p>
      </div>
      <p class="text-gray-500 font-13px">
        <span class="text-green-500">You are almost done!</span>
        To further strengthen your profile, it is highly recommended for you to
        complete the 4 sections of your application.
      </p>
    </div>
    <div
      class="stepper-component __stepper bg-white rounded-md shadow-sm xl:mx-0"
    >
      <div class="stepper-component__items-wrapper flex">
        <div
          class="stepper-component__group-wrapper p-3 flex items-center relative w-1/4 hover:cursor-pointer"
        >
          <div
            class="stepper-component__group flex items-center w-full lg:px-2"
          >
            <div class="mr-1 rounded-full my-auto md:block md:mr-4 bg-success">
              <div
                class="h-8 w-8 flex items-center justify-center sm:h-10 sm:w-10"
              >
                <div
                  class="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center"
                >
                  <i class="far fa-user"></i>
                </div>
              </div>
            </div>
            <div
              class="stepper-component__group__inner w-full flex items-center md:block"
            >
              <p class="font-semibold text-gray-700">Applicant Profile</p>
              <div class="flex items-center">
                <div
                  class="overflow-hidden text-xs hidden rounded bg-gray-200 mr-2 w-full h-1.5 lg:flex"
                >
                  <div
                    class="shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-orange-300"
                    style="width: 75%"
                  ></div>
                </div>
                <p
                  class="font-semibold ml-1 md:ml-0 text-orange-300"
                  style="font-size: 12px"
                >
                  75%
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="stepper-component__group-wrapper p-3 flex items-center relative w-1/4 hover:cursor-pointer"
        >
          <div
            class="stepper-component__group flex items-center w-full lg:px-2"
          >
            <div class="mr-1 rounded-full md:block md:mr-4 bg-success">
              <div
                class="h-8 w-8 flex items-center justify-center sm:h-10 sm:w-10"
              >
                <div
                  class="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center"
                >
                  <i class="far fa-file"></i>
                </div>
              </div>
            </div>
            <div
              class="stepper-component__group__inner w-full flex items-center md:block"
            >
              <p class="font-semibold text-gray-700">Resume / CV</p>
              <div class="flex items-center">
                <div
                  class="overflow-hidden text-xs hidden rounded bg-gray-200 mr-2 w-full h-1.5 lg:flex"
                >
                  <div
                    class="shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-red-400"
                    style="width: 50%"
                  ></div>
                </div>
                <p
                  class="font-semibold ml-1 md:ml-0 text-red-400"
                  style="font-size: 12px"
                >
                  50%
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="stepper-component__group-wrapper p-3 flex items-center relative w-1/4 hover:cursor-pointer"
        >
          <div
            class="stepper-component__group flex items-center w-full lg:px-2"
          >
            <div class="mr-1 rounded-full md:block md:mr-4 bg-success">
              <div
                class="h-8 w-8 flex items-center justify-center sm:h-10 sm:w-10"
              >
                <div
                  class="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center"
                >
                  <i class="fas fa-chart-column"></i>
                </div>
              </div>
            </div>
            <div
              class="stepper-component__group__inner w-full flex items-center md:block"
            >
              <p class="font-semibold text-gray-700">Assessment Score</p>
              <div class="flex items-center">
                <div
                  class="overflow-hidden text-xs hidden rounded bg-gray-200 mr-2 w-full h-1.5 lg:flex"
                >
                  <div
                    class="shadow-none flex flex-col text-center whitespace-nowrap justify-center"
                    style="width: 0%"
                  ></div>
                </div>
                <p
                  class="font-semibold ml-1 md:ml-0 text-red-400"
                  style="font-size: 12px"
                >
                  0%
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="stepper-component__group-wrapper p-3 flex items-center relative w-1/4 hover:cursor-pointer"
        >
          <div
            class="stepper-component__group flex items-center w-full lg:px-2"
          >
            <div class="mr-1 rounded-full md:block md:mr-4 bg-success">
              <div
                class="h-8 w-8 flex items-center justify-center sm:h-10 sm:w-10"
              >
                <div
                  class="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center"
                >
                  <i class="fas fa-film"></i>
                </div>
              </div>
            </div>
            <div
              class="stepper-component__group__inner w-full flex items-center md:block"
            >
              <p class="font-semibold text-gray-700">Video Introduction</p>
              <div class="flex items-center">
                <div
                  class="overflow-hidden text-xs hidden rounded bg-gray-200 mr-2 w-full h-1.5 lg:flex"
                >
                  <div
                    class="shadow-none flex flex-col text-center whitespace-nowrap justify-center"
                    style="width: 0%"
                  ></div>
                </div>
                <p
                  class="font-semibold ml-1 md:ml-0 text-red-400"
                  style="font-size: 12px"
                >
                  0%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-x-4 lg:flex-row">
    <div class="bg-white rounded shadow w-full h-min w-11/12">
      <div class="header border-b relative flex flex-col lg:flex-row">
        <img
          src="/images/user-img.png"
          width="120"
          class="header__profile-image mx-auto mt-4 object-contain lg:m-6"
        />
        <div
          class="flex flex-col justify-between relative w-full px-6 pb-6 pt-4 gap-y-3 lg:border-l lg:gap-y-0 lg:p-6"
        >
          <div
            class="header__text-container flex flex-col items-center lg:block"
          >
            <span class="text-md font-semibold text-left font-16px"
              >Billy Joel L. Ranario</span
            >
            <p class="header__position-title text-gray-700 text-md font-16px">
              Full-stack Developer
            </p>
          </div>
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              class="mr-2 font-16px text-gray-700 svg-inline--fa fa-graduation-cap fa-fw"
            >
              <path
                fill="currentColor"
                d="M307.2 66.2L47.6 160l74 26.7c10.3-6.9 21.5-12.6 33.4-17.1l159.4-59.8c8.3-3.1 17.5 1.1 20.6 9.4s-1.1 17.5-9.4 20.6L166.2 199.6c-1.5 .5-2.9 1.1-4.3 1.7l145.3 52.5c4.1 1.5 8.4 2.2 12.8 2.2s8.7-.8 12.8-2.2L592.4 160 332.8 66.2c-4.1-1.5-8.4-2.2-12.8-2.2s-8.7 .8-12.8 2.2zM296.3 283.9L126.9 222.7C99.4 246 82.1 279.9 80.2 316.9c5.9 13.2 10.2 27.5 13.4 41.5c6.4 27.6 10.7 65.9 2.1 108.7c-.9 4.3-3.4 8-7.1 10.4s-8.2 3.1-12.4 2l-64-16c-5.2-1.3-9.4-5.1-11.2-10.2s-.9-10.7 2.3-14.9c8.6-11.7 16-24.6 22.5-37.6C37.2 377.8 48 348.4 48 320c0-.6 0-1.2 .1-1.8c1.4-41 18-79.1 45.1-107.7L15.8 182.6C6.3 179.1 0 170.1 0 160s6.3-19.1 15.8-22.6L296.3 36.1c7.6-2.7 15.6-4.1 23.7-4.1s16.1 1.4 23.7 4.1L624.2 137.4c9.5 3.4 15.8 12.5 15.8 22.6s-6.3 19.1-15.8 22.6L343.7 283.9c-7.6 2.7-15.6 4.1-23.7 4.1s-16.1-1.4-23.7-4.1zm-122-10L160.4 406.3c.7 .8 1.8 2.1 3.7 3.7c6 5.2 16.5 11.5 31.9 17.5C226.4 439.4 270.3 448 320 448s93.6-8.6 124.1-20.6c15.4-6 25.8-12.3 31.9-17.5c1.9-1.6 3-2.8 3.7-3.7L465.7 273.8l31-11.2L512 408c0 35.3-86 72-192 72s-192-36.7-192-72l15.3-145.4 31 11.2zM480.5 405a.2 .2 0 1 0 -.3-.1 .2 .2 0 1 0 .3 .1zm-321 0a.1 .1 0 1 0 .2 0 .1 .1 0 1 0 -.2 0zM67 444.2c2.5-20.7 1.7-40-.5-56.7c-3.8 10-8 19.3-12.1 27.6c-3.8 7.6-7.9 15.2-12.5 22.8L67 444.2z"
                class=""
              ></path>
            </svg>
            <p class="text-gray-700">
              Bachelor of Science in Information Technology
            </p>
          </div>
          <div
            class="header__other-details flex flex-col gap-3 lg:flex-row lg:items-center"
          >
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="font-13px mr-2 text-gray-700 svg-inline--fa fa-briefcase fa-fw"
              >
                <path
                  fill="currentColor"
                  d="M160 48V96H352V48c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zM128 96V48c0-26.5 21.5-48 48-48H336c26.5 0 48 21.5 48 48V96h64c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64zm240 32H144 64c-17.7 0-32 14.3-32 32v96H176h32 96 32H480V160c0-17.7-14.3-32-32-32H368zM480 288H336v48c0 17.7-14.3 32-32 32H208c-17.7 0-32-14.3-32-32V288H32V416c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V288zm-272 0v48h96V288H208z"
                  class=""
                ></path>
              </svg>
              <p class="text-gray-700">12 years 10 months</p>
            </div>
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="font-13px mr-2 text-gray-700 svg-inline--fa fa-calendar-check fa-fw"
              >
                <path
                  fill="currentColor"
                  d="M128 16c0-8.8-7.2-16-16-16s-16 7.2-16 16V64H64C28.7 64 0 92.7 0 128v32 32V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 160 128c0-35.3-28.7-64-64-64H352V16c0-8.8-7.2-16-16-16s-16 7.2-16 16V64H128V16zM32 192H416V448c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V192zM64 96H384c17.7 0 32 14.3 32 32v32H32V128c0-17.7 14.3-32 32-32zM331.3 283.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L208 361.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l112-112z"
                  class=""
                ></path>
              </svg>
              <p class="text-gray-700">Immediately</p>
            </div>
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="font-14px mr-2 text-gray-700 svg-inline--fa fa-circle-dollar fa-fw"
              >
                <path
                  fill="currentColor"
                  d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM272 120v23c13.5 1 26.6 4.6 39.6 8.3c1.5 .4 3.1 .9 4.6 1.3c8.5 2.4 13.5 11.2 11.2 19.7s-11.2 13.5-19.7 11.2c-2.4-.7-4.8-1.4-7.2-2.1c-7.5-2.2-15.2-4.4-22.9-5.5c-19.1-2.8-36.6-.4-49.3 5.1c-12.9 5.6-18.6 13.1-19.8 19.5c-1.8 9.8 2.1 16.5 10.2 21.7c10.6 6.8 26.5 11.3 45.8 16.8l.3 .1c17.7 5 38.9 11.1 54.3 21.7c19 13 27.8 33.8 23.6 56.5c-4 21.6-18.9 36-37.8 43.6c-9.9 4-21.1 6.3-33.1 6.9l0 24.2c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-25.9c-8.1-1.3-21.8-5.2-32.4-8.4c-6.9-2.1-13.8-4.3-20.7-6.5c-8.4-2.8-12.9-11.8-10.2-20.2s11.8-12.9 20.2-10.2c6.6 2.2 13.2 4.3 19.9 6.3c11.2 3.4 22.7 6.6 28.1 7.4c19.8 2.9 36.5 1.3 48-3.4c11.2-4.5 16.8-11.3 18.3-19.7c1.9-10.5-1.5-18.4-10.2-24.4c-12-8.2-26.8-12.3-40.9-16.2c-2.3-.6-4.7-1.3-6.9-1.9c-17.1-4.8-37-10.5-51.7-19.9c-8.1-5.2-15.7-12.1-20.5-21.7c-4.9-9.8-6.2-20.8-4-32.8c3.8-20.7 20-35.1 38.6-43.1c7.4-3.2 15.6-5.6 24.3-7.1V120c0-8.8 7.2-16 16-16s16 7.2 16 16z"
                  class=""
                ></path>
              </svg>
              <p class="text-green-500">70,000</p>
            </div>
          </div>
        </div>
        <img
          src="/images/icon-edit-outline.svg"
          class="edit-icon absolute right-6 top-6 block lg:hidden"
        />
      </div>
      <div class="general-details p-6">
        <div class="flex items-center">
          <p class="mr-auto title font-16px font-semibold">General Details</p>
          <img
            src="/images/icon-edit-outline.svg"
            class="block lg:hidden"
          /><img src="/images/icon-edit-outline.svg" class="edit-icon" />
        </div>
        <div class="flex flex-wrap pt-5">
          <p class="detail text-gray-500 w-6/12 lg:w-5/12">Date of Birth</p>
          <p>2023-08-14</p>
        </div>
        <div class="flex flex-wrap pt-5">
          <p class="detail text-gray-500 w-6/12 lg:w-5/12">Gender</p>
          <p>Male</p>
        </div>
        <div class="flex flex-wrap pt-5">
          <p class="detail text-gray-500 w-6/12 lg:w-5/12">Civil Status</p>
          <p>Single</p>
        </div>
        <div class="flex flex-wrap pt-5">
          <p class="detail text-gray-500 w-6/12 lg:w-5/12">Citizenship</p>
          <p>Filipino</p>
        </div>
      </div>
      <div>
        <div class="general-details border-t p-6">
          <div class="flex items-center">
            <p class="mr-auto title font-16px font-semibold">Professional Status</p>
            <img
              src="/images/icon-edit-outline.svg"
              class="block lg:hidden"
            /><img src="/images/icon-edit-outline.svg" class="edit-icon" />
          </div>
          <div class="general-details__details-group flex flex-wrap pt-5">
            <p
              class="general-details__details-group-label detail text-gray-500 w-6/12 lg:w-5/12"
            >
              Recent Job Title
            </p>
            <p>Full-Stack Developer</p>
          </div>
          <div class="general-details__details-group flex flex-wrap pt-5">
            <p
              class="general-details__details-group-label detail text-gray-500 w-6/12 lg:w-5/12"
            >
              Interview Availability
            </p>
            <p>anytime</p>
          </div>
          <div class="general-details__details-group flex flex-wrap pt-5">
            <p
              class="general-details__details-group-label detail text-gray-500 w-6/12 lg:w-5/12"
            >
              Current Monthly Salary (Gross)
            </p>
            <p>
              <span class="text-success">PHP 70,000</span>
            </p>
          </div>
          <div class="general-details__details-group flex flex-wrap pt-5">
            <p
              class="general-details__details-group-label detail text-gray-500 w-6/12 lg:w-5/12"
            >
              Expected Monthly Salary (Gross)
            </p>
            <p class="font-weight-bold text-success">
              PHP 70,000<!---->
              - PHP 70,000
            </p>
          </div>
          <div class="general-details__details-group flex flex-wrap pt-5">
            <p
              class="general-details__details-group-label detail text-gray-500 w-6/12 lg:w-5/12"
            >
              Allowance (Non-Taxable)
            </p>
            <p><span>-</span></p>
          </div>
          <div class="general-details__details-group flex flex-wrap pt-5">
            <p
              class="general-details__details-group-label detail text-gray-500 w-6/12 lg:w-5/12"
            >
              Pre-employment Leaves
            </p>
            <p
              class="general-details__details-val--pre-employment-leaves break-all w-6/12 lg:w-5/12"
            >
              Yes, for Christmas
            </p>
          </div>
          <div class="general-details__details-group flex flex-wrap pt-5">
            <p
              class="general-details__details-group-label detail text-gray-500 w-6/12 lg:w-5/12"
            >
              Where can you work?
            </p>
            <p>Home</p>
          </div>
          <div class="general-details__details-group flex flex-wrap pt-5">
            <p
              class="general-details__details-group-label detail text-gray-500 w-6/12 lg:w-5/12"
            >
              Estimate Travel Time to Office
            </p>
            <p>-</p>
          </div>
          <div class="general-details__details-group flex flex-wrap pt-5">
            <p
              class="general-details__details-group-label detail text-gray-500 w-6/12 lg:w-5/12"
            >
              Connection Type
            </p>
            <p>Fiber</p>
          </div>
          <div class="general-details__details-group flex flex-wrap pt-5">
            <p
              class="general-details__details-group-label detail text-gray-500 w-6/12 lg:w-5/12"
            >
              Last Book Read
            </p>
            <p
              class="general-details__details-val--pre-employment-leaves break-all w-6/12 lg:w-5/12"
            >
              The Witcher
            </p>
          </div>
          <div class="general-details__details-group flex flex-wrap pt-5">
            <p
              class="general-details__details-group-label detail text-gray-500 w-6/12 lg:w-5/12"
            >
              Hobbies and Interest
            </p>
            <p
              class="general-details__details-val--pre-employment-leaves break-all w-6/12 lg:w-5/12"
            >
              Cycling and Riding Motorcycle
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-y-4 w-full lg:w-4/12">
      <div class="bg-white rounded shadow mt-6 md:mt-0">
        <div class="px-5 py-4">
          <p class="font-semibold text-gray-700">Video Introduction</p>
        </div>
        <img src="/images/vid-intro.png" class="w-full">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'profile',
});
</script>
