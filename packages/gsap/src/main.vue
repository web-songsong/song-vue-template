<template>

  <div class="svt-gsap">
    <svg class="stage"
         viewBox="0 0 1000 700"
         version="1.1"
         xmlns="http://www.w3.org/2000/svg">
      <g id="anis"
         ref="anis">
        <template v-for="ele in polygonData">
          <path v-if="ele"
                :d="parsePolygonStr(ele[0])"
                :fill="styleColor||ele[1]"/>
        </template>

      </g>
    </svg>
  </div>
</template>

<script>
  import { TweenMax, TimelineMax } from 'gsap'
  import { preData } from './data'

  export default {
    data() {
      return {
        polygonData: preData.preload.polygon,
      }
    },
    props: {
      styleColor: {
        type: String,
        default: ''
      },
    },
    methods: {
      parsePolygonStr(polygonStr, flag = false, width = 1000, height = 700) {
        if (flag) return 'M' + polygonStr
        let pointsArr = polygonStr.split(/\s+|,\s/)
        return 'M' + pointsArr.map(function (currentVal, index) {
          if (index % 2 === 0) {
            return (parseFloat(currentVal) * width / 100).toFixed(2)
          } else {
            return (parseFloat(currentVal) * height / 100).toFixed(2)
          }
        })
      }
    }
    ,
    mounted() {
      let anisPolygons = Array.from(this.$refs.anis.querySelectorAll('path'))

      this.$emit('runMain', runMain)

      let _self = this

      function runMain() {
        let tl = new TimelineMax()
        let mapObj = { 0: '#28282a', 1: '#111', 2: '#333', 3: '#222', 4: '#121212' }
        tl.add([
                 TweenMax.to('#anis path', {
                   attr: {
                     fill: (index) => mapObj[index % 5]
                   }
                 }),
                 TweenMax.to('.stage', {
                   scale: 1,
                   ease: 'Back.easeOut.config(1.7)'
                 }),
                 TweenMax.to('#anis path', 2, {
                   attr: {
                     d(index) {
                       let nextSpeciesPolygon = preData.ready.polygon
                       return _self.parsePolygonStr(nextSpeciesPolygon[index][0])
                     },
                     fill(index) {
                       let nextSpeciesPolygon = preData.ready.polygon
                       return nextSpeciesPolygon[index][1]
                     }
                   },

                 })
               ])
          // 2，海豚
          .add(
            TweenMax.to('#anis path', 1, {
              attr: {
                d(index) {
                  let nextSpeciesPolygon = preData.preAni.polygon

                  return _self.parsePolygonStr(nextSpeciesPolygon[index][0])
                },
                fill(index) {
                  let nextSpeciesPolygon = preData.preAni.polygon
                  return nextSpeciesPolygon[index][1]
                }
              }
            }),
          )
          // 3，爆炸碎片
          .add(
            TweenMax.to('#anis path', 2, {
              attr: {
                d(index) {
                  let nextSpeciesPolygon = preData.ready.polygon

                  return _self.parsePolygonStr(nextSpeciesPolygon[index][0])
                },
                fill(index) {
                  let nextSpeciesPolygon = preData.ready.polygon
                  return nextSpeciesPolygon[index][1]
                },
              }
            }),
            '+=0.4'
          )
          // 4，“piece”logo
          .add(
            TweenMax.to('#anis path', 1.3, {
              attr: {
                d(index) {
                  let nextSpeciesPolygon = preData.title.polygon
                  return nextSpeciesPolygon[index]
                    ? _self.parsePolygonStr(nextSpeciesPolygon[index][0]) : ''
                },
                fill(index) {
                  let nextSpeciesPolygon = preData.title.polygon
                  return nextSpeciesPolygon[index] ? nextSpeciesPolygon[index][1] : ''
                }
              }
            }),
            '+=0.4'
          )
          .add(
            TweenMax.to('#anis path', 2, {
              attr: {
                d(index) {
                  let nextSpeciesPolygon = preData.ready.polygon

                  return _self.parsePolygonStr(nextSpeciesPolygon[index][0])
                },
                fill(index) {
                  let nextSpeciesPolygon = preData.ready.polygon
                  return nextSpeciesPolygon[index][1]
                }
              }
            }),
            '+=0.4'
          )
          .add(
            TweenMax.to('#anis path', 1.2, {
              attr: {
                d(index) {
                  let nextSpeciesPolygon = preData.hxs.polygon
                  return nextSpeciesPolygon[index]
                    ? _self.parsePolygonStr(nextSpeciesPolygon[index][0], true) : ''
                },
                fill(index) {
                  let nextSpeciesPolygon = preData.hxs.polygon
                  return nextSpeciesPolygon[index] ? nextSpeciesPolygon[index][1] : ''
                }
              }
            }),
            '+=0.4'
          )
      }
    }
  }
</script>

<style scoped
       lang="stylus">

  .svt-gsap {
    /*position: absolute;*/
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;


    .stage {
      width: 100%;
      height: 75%;
      transform: scale(0.3);
    }


    button {
      padding: 5px 20px;
      cursor: pointer;
    }

  }
</style>