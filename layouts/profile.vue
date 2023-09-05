<template>
  <div class="profile--container">
    <div class="w-full z-10 sticky sticky-position top-0 hidden lg:block">
      <div class="brand relative px-6 flex items-center bg-white shadow-sm">
        <img
          src="/images/goteam-logo-dark.svg"
          width="110px"
          class="mr-9 cursor-pointer"
        />
        <div class="flex items-center gap-x-9 h-full mr-auto">
          <div
            class="flex items-center cursor-pointer text-gray-500 h-full hover-text-primary"
          >
            <span>Careers</span>
          </div>
          <div
            class="flex items-center cursor-pointer text-gray-500 h-full hover-text-primary"
          >
            <span>Find your Role</span>
          </div>
        </div>
        <div class="absolute w-3/12" style="left: 36.5%">
          <form class="search relative flex items-center">
            <input
              placeholder="Type a job title or role"
              class="search__input rounded-full border w-full pl-4 pr-24 w-60 py-2 focus:outline-none lg:pr-24"
            />
            <div
              class="bg-white shadow w-full shadow-lg rounded-lg absolute p-4 overflow-hidden"
              style="top: 2.5rem; display: none"
            >
              <div class="flex items-center justify-between">
                <span class="font-bold">Your Recent search</span
                ><span class="text-danger cursor-pointer">Clear history</span>
              </div>
            </div>
          </form>
        </div>
        <div class="relative">
          <div class="cursor-pointer flex items-center">
            <div class="mr-2 text-right">
              <p class="font-semibold text-gray-900">Billy Joel L. Ranario</p>
              <p class="text-primary">billyranario@gmail.com</p>
            </div>
            <img
              src="/images/user-img.png"
              class="mr-2 border h-9 w-9 rounded-full"
            />
            <i class="fas fa-chevron-down text-gray-400"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="scroll-area profile-page">
      <div
        class="block gap-4 relative mx-auto w-full lg:py-6 lg:flex xl:w-11/12 3xl:w-10/12"
      >
        <ul
          class="nav-tabs flex flex-col gap-y-2 hidden lg:block lg:w-2/12 profile-page--nav"
        >
          <a href="/profile/personal-info" class="hover-text-primary active">
            <li
              class="flex gap-3 nav-item w-full rounded aligh px-3 py-2 cursor-pointer items-center active"
            >
              <i class="far fa-user"></i> Personal
              <div class="ml-auto">
                <i class="fas fa-chevron-right"></i>
              </div>
            </li>
          </a>
          <a href="/profile/resume" class="hover-text-primary">
            <li
              class="flex gap-3 nav-item w-full rounded aligh px-3 py-2 cursor-pointer items-center active"
            >
              <i class="far fa-file"></i> Resume / CV
            </li>
          </a>
          <a href="/profile/assessment" class="hover-text-primary">
            <li
              class="flex gap-3 nav-item w-full rounded aligh px-3 py-2 cursor-pointer items-center active"
            >
              <i class="fas fa-chart-column"></i> Assessment
            </li>
          </a>
          <a href="/profile/video-script" class="hover-text-primary">
            <li
              class="flex gap-3 nav-item w-full rounded aligh px-3 py-2 cursor-pointer items-center active"
            >
              <i class="fa fa-film"></i> Video Script
            </li>
          </a>
          <hr class="my-3" />
          <a href="/profile/video-script" class="hover-text-primary">
            <li
              class="flex gap-3 nav-item w-full rounded aligh px-3 py-2 cursor-pointer items-center active"
            >
              <i class="fa fa-briefcase"></i> Application Tracking
            </li>
          </a>
          <a href="/profile/bookmarks" class="hover-text-primary">
            <li
              class="flex gap-3 nav-item w-full rounded aligh px-3 py-2 cursor-pointer items-center active"
            >
              <i class="far fa-bookmark"></i> Bookmarks
            </li>
          </a>
          <a href="/profile/notifications" class="hover-text-primary">
            <li
              class="flex gap-3 nav-item w-full rounded aligh px-3 py-2 cursor-pointer items-center active"
            >
              <i class="far fa-bell"></i> Notifications
            </li>
          </a>
          <a href="/profile/activity" class="hover-text-primary">
            <li
              class="flex gap-3 nav-item w-full rounded aligh px-3 py-2 cursor-pointer items-center active"
            >
              <i class="fa fa-layer-group"></i> Activity Logs
            </li>
          </a>
          <a href="/profile/settings" class="hover-text-primary">
            <li
              class="flex gap-3 nav-item w-full rounded aligh px-3 py-2 cursor-pointer items-center active"
            >
              <i class="fas fa-cog"></i> Settings
            </li>
          </a>
          <p class="text-sm text-gray-500 pl-3 mt-3">
            Copyright 2018 - 2023. <br> All Rights Reserved
          </p>
          <p class="text-sm flex pl-3 gap-2">
            <a class="text-primary" href="#">Terms of Use</a>
            &bull;
            <a class="text-primary" href="#">Privacy Policy</a>
          </p>
        </ul>

        <div class="w-full lg:w-11/12 3xl:w-11/12 profile-page--container">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
