<template>
  <div class="nav">
    <!-- toggle 後的顯示內容 -->
    <!-- toggle 內容的詳細顯示 -->
    <div class="navContent">
      <div class="navContentTxt">
        <!-- v-show="isShow"
            @mouseleave="leaveSearch()" -->
        <div class="navHamGoogleSearch tw-text-darkBlue">
          <script
            async
            src="https://cse.google.com/cse.js?cx=c57491d8d8f1fde83"
          ></script>
          <div></div>
          <div class="gcse-search"></div>
        </div>
        <ul>
          <!-- <template v-for="(item, index) in navData">
            <li @click="showNav(index)" :key="index" class="tw-pb-4 tw-text-xl">
              <div
                class="tw-text-gray-50 tw-text-xl tw-font-semibold tw-border-solid tw-border-gray-50 tw-border labelContainer"
              >
                {{ item.label }}
              </div>
              <template v-if="navIndex !== null && navIndex !== 'undenfined'">
                <template v-for="(item, i) in navChildren">
                  <div :key="i" v-show="currentNav === index">
                    <nuxt-link
                      class="tw-text-darkBlue tw-text-base navHamContent"
                      :to="item.url"
                      @click.native="closeHamNav"
                    >
                      <span class="tw-text-xl tw-text-gray-50">
                        {{ item.name }}
                      </span>
                    </nuxt-link>
                    <span class="pinContainer">
                      <template
                        v-if="
                          typeof item.pinData != 'undefined' &&
                          Array.isArray(item.pinData) &&
                          item.pinData.length > 0
                        "
                      >
                        <template v-for="(value, i) in item.pinData">
                          <div class="pinPadding" :key="i">
                            <nuxt-link
                              @click.native="closeHamNav"
                              :to="`/news/${value.id}`"
                            >
                              <span
                                class="tw-text-base navHamellipsis tw-text-gray-50"
                                >{{ value.newsTitle }}
                              </span>
                            </nuxt-link>
                          </div>
                        </template>
                      </template>
                    </span>
                  </div>
                </template>
              </template>
            </li>
          </template> -->
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Nav',
  data() {
    return {
      isToggle: false,
      isShowToggle: false,
      isShowHam: true,
      isShowTimes: false,
      navIndex: null,
      currentNav: 0,
      active: null,
    }
  },
  computed: {
    navChildren() {
      if (this.navIndex != null) {
        return this.navData[this.navIndex].children
      } else {
        return []
      }
    },
  },
  methods: {
    closeHamNav() {
      this.isShowHam = true
      this.isShowToggle = false
      this.isShowTimes = false
    },
    ShowToggle() {
      if (this.isShowToggle === true) {
        this.isShowToggle = false
        this.isShowHam = true
        this.isShowTimes = false
      } else if (this.isShowToggle === false) {
        this.isShowToggle = true
        this.isShowHam = false
        this.isShowTimes = true
      }
    },
    // 內容
    showNav(newNav) {
      switch (true) {
        case this.isToggle && newNav != this.navIndex:
          this.navIndex = newNav
          this.currentNav = newNav
          break
        case this.isToggle && newNav == this.navIndex:
          this.navIndex = null
          this.isToggle = false
          break
        default:
          this.navIndex = newNav
          this.currentNav = newNav
          this.isToggle = true
          break
      }
    },
  },
  watch: {
    isShowToggle(value) {
      // 還原選單
      if (!value) this.navIndex = null
    },
  },
}
</script>
<style scoped lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
// googlesearch
.navHamGoogleSearch {
  position: absolute;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  left: 0;
}
.childrenConatiner {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
}
//
.navHamellipsis {
  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.labelContainer {
  padding: 0.5rem;
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: black;
  }
}
</style>
