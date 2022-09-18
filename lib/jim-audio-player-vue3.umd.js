(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jim-audio-player-vue3"] = factory(require("vue"));
	else
		root["jim-audio-player-vue3"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 744:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 203:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/audio-player/src/index.vue?vue&type=template&id=133164a4

const _hoisted_1 = {
  class: "audio-player-box"
};
const _hoisted_2 = ["src"];

const _hoisted_3 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" 您的浏览器不支持音频播放 ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("audio", {
    onCanplay: _cache[0] || (_cache[0] = (...args) => $options.updateDuration && $options.updateDuration(...args)),
    onEnded: _cache[1] || (_cache[1] = (...args) => $options.endedHandler && $options.endedHandler(...args)),
    onTimeupdate: _cache[2] || (_cache[2] = (...args) => $options.updateTime && $options.updateTime(...args)),
    controls: "",
    ref: "audioRef",
    style: {
      "display": "none"
    }
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("source", {
    src: $props.src
  }, null, 8, _hoisted_2), _hoisted_3], 544), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "default", {
    currentTime: $data.currentTime,
    duration: $data.duration,
    isPlaying: $data.isPlaying,
    isMuted: $options.isMuted,
    noMusic: $options.noMusic,
    onProgressBarClick: $options.progressBarClickHandler,
    OnProgressMousedown: $options.progressMousedownHandler,
    onVolumeBarClick: $options.volumeBarClickHandler,
    togglePlay: $options.togglePlay,
    back: $options.back,
    forward: $options.forward
  })]);
}
;// CONCATENATED MODULE: ./packages/audio-player/src/index.vue?vue&type=template&id=133164a4

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/audio-player/src/index.vue?vue&type=script&lang=js
/* harmony default export */ var srcvue_type_script_lang_js = ({
  name: 'AudioPlayer',
  props: {
    src: {
      type: String,
      default: ""
    },
    forwardStep: {
      type: Number,
      default: 3
    },
    backStep: {
      type: Number,
      default: 3
    },
    // 静音门限
    muteThreshold: {
      type: Number,
      default: 0.08
    },
    currentRef: {
      type: Object,
      default: () => ({})
    },
    progressBarRefName: {
      type: String,
      default: 'progressBarRef'
    },
    progressRefName: {
      type: String,
      default: 'progressRef'
    },
    volumeBarRefName: {
      type: String,
      default: 'volumeBarRef'
    },
    volumeRefName: {
      type: String,
      default: 'volumeRef'
    }
  },

  data() {
    return {
      // 播放状态
      isPlaying: false,
      currentTime: "00:00",
      duration: "00:00",
      // 音量
      audioVolume: 0.5,
      //是否在拖动进度条
      isMoving: false,
      // 拖动进度条时保存播放状态
      savedIsPlaying: false
    };
  },

  computed: {
    isMuted() {
      return this.audioVolume < this.muteThreshold;
    },

    audioRef() {
      const {
        audioRef = {}
      } = this.currentRef.$refs || {};
      return audioRef;
    },

    noMusic() {
      return this.duration === '00:00';
    },

    progressBarRef() {
      return this.$parent.$refs[this.progressBarRefName] || {};
    },

    progressRef() {
      return this.$parent.$refs[this.progressRefName] || {};
    },

    volumeBarRef() {
      return this.$parent.$refs[this.volumeBarRefName] || {};
    },

    volumeRef() {
      return this.$parent.$refs[this.volumeRefName] || {};
    }

  },
  methods: {
    updateDuration() {
      const audioRef = this.audioRef;
      this.duration = this.transTime(audioRef.duration);
      audioRef.loop = false;
      audioRef.volume = 0.5; // 设置音量50%

      this.audioVolume = 0.5;
    },

    endedHandler() {
      this.isPlaying = false;
    },

    // 播放暂停控制
    togglePlay() {
      if (this.noMusic) {
        return;
      }

      const audioRef = this.audioRef;

      if (this.currentTime === this.duration) {
        this.currentTime = "00:00";
        audioRef.currentTime = 0;
        this.progressBarRef.style.width = "0%";
      }

      if (!this.isPlaying) {
        audioRef.play();
        this.isPlaying = true;
      } else {
        audioRef.pause();
        this.isPlaying = false;
      }
    },

    // 回退
    back() {
      if (this.noMusic) return;
      const audioRef = this.audioRef;
      let currentTime = audioRef.currentTime - this.backStep;

      if (currentTime < 0) {
        currentTime = 0;
      }

      audioRef.currentTime = currentTime;
      this.currentTime = this.transTime(currentTime);
    },

    // 快进
    forward() {
      if (this.noMusic) return;
      const audioRef = this.audioRef;
      let currentTime = audioRef.currentTime + this.forwardStep;

      if (currentTime > audioRef.duration) {
        currentTime = audioRef.duration;
      }

      audioRef.currentTime = currentTime;
      this.currentTime = this.transTime(currentTime);
    },

    // 更新进度条与当前播放时间
    updateTime() {
      const audioRef = this.audioRef;
      const value = audioRef.currentTime / audioRef.duration;
      const progressRef = this.progressRef;

      if (progressRef) {
        progressRef.style.width = value * 100 + "%";

        if (value === 1) {
          this.isPlaying = false;
        }
      } else {
        this.isPlaying = false;
      }

      this.currentTime = this.transTime(audioRef.currentTime);
    },

    // 音频播放时间换算, 秒转为字符串, eg: 70 => 01:10
    transTime(time) {
      var duration = parseInt(time);
      var minute = parseInt(duration / 60);
      var sec = duration % 60 + "";
      var isM0 = ":";

      if (minute === 0) {
        minute = "00";
      } else if (minute < 10) {
        minute = "0" + minute;
      }

      if (sec.length === 1) {
        sec = "0" + sec;
      }

      return minute + isM0 + sec;
    },

    updateProgress(offsetX) {
      const progressBarRef = this.progressBarRef;
      const progressRef = this.progressRef;
      const audioRef = this.audioRef;
      const clientWidth = progressBarRef.clientWidth; // 只有音乐开始播放后才可以调节，已经播放过但暂停了的也可以

      const ratio = offsetX / clientWidth;
      const rate = ratio * 100; // 设置进度条宽度

      progressRef.style.width = rate + "%"; // 设置audio当前播放时刻

      audioRef.currentTime = audioRef.duration * ratio; // 设置播放时间

      this.currentTime = this.transTime(audioRef.currentTime);
    },

    progressBarClickHandler(e) {
      if (this.noMusic) return;

      if (!this.isMoving || this.isPlaying) {
        this.updateProgress(e.offsetX);
      }
    },

    volumeBarClickHandler(e) {
      if (this.noMusic) return;
      const volumeBarRef = this.volumeBarRef;
      const volumeRef = this.volumeRef;
      const audioRef = this.audioRef;
      const clientHeight = volumeBarRef.clientHeight; // 只有音乐开始播放后才可以调节，已经播放过但暂停了的也可以

      const ratio = e.offsetY / clientHeight;
      const rate = ratio * 100; // ratio小于muteThreshold时静音

      const isMuted = ratio < this.muteThreshold;
      const audioVolume = isMuted ? 0 : ratio; // 设置音量进度条高度

      volumeRef.style.height = !isMuted ? rate + "%" : "0%"; // 设置audio音量

      audioRef.volume = audioVolume;
      this.audioVolume = audioVolume;
    },

    progressMousedownHandler() {
      if (this.noMusic) return; // 拖动前保存播放状态

      this.savedIsPlaying = this.isPlaying;
      this.audioRef.pause();
      this.isPlaying = false;
      this.isMoving = true;
      const progressBarRef = this.progressBarRef; //进度条 左 边距离页面左边的距离 移动最小值

      let moveMin = progressBarRef.offsetParent.offsetLeft + progressBarRef.offsetLeft; //进度条 右 边距离页面左边的距离 移动最大值

      let moveMax = progressBarRef.offsetParent.offsetLeft + progressBarRef.offsetLeft + progressBarRef.clientWidth;

      let move = move => {
        if (move.pageX >= moveMax) {
          return;
        } else if (move.pageX <= moveMin) {
          return;
        }

        this.updateProgress(move.pageX - moveMin);
      }; //获取当前鼠标的位置


      document.addEventListener("mousemove", move, false); //鼠标弹起来

      document.addEventListener("mouseup", () => {
        setTimeout(() => {
          this.isMoving = false;

          if (this.savedIsPlaying) {
            this.audioRef.play();
            this.isPlaying = this.savedIsPlaying;
            this.savedIsPlaying = !this.savedIsPlaying;
          }
        }, 200);
        document.removeEventListener("mousemove", move, false);
      }, false);
    }

  }
});
;// CONCATENATED MODULE: ./packages/audio-player/src/index.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
;// CONCATENATED MODULE: ./packages/audio-player/src/index.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(srcvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var audio_player_src = (__exports__);
;// CONCATENATED MODULE: ./packages/audio-player/index.js
// src/index.js
// 导入组件，组件必须声明 name
 // 为组件提供 install 安装方法，供按需引入

audio_player_src.install = function (Vue) {
  Vue.component(audio_player_src.name, audio_player_src);
}; // 默认导出组件


/* harmony default export */ var audio_player = (audio_player_src);
;// CONCATENATED MODULE: ./packages/index.js
// 导入组件
 // 存储组件列表

const components = [audio_player]; // 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册

const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return; // 遍历注册全局组件

  components.forEach(component => {
    Vue.component(component.name, component);
    Vue.config.globalProperties[component.name] = component.name + '1';
  });
}; // // 判断是否是直接引入文件


if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  AudioPlayer: audio_player
});
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=jim-audio-player-vue3.umd.js.map