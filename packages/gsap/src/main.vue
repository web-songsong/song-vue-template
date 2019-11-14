<template>

  <div class="svt-gsap">
    <svg class="stage"
         viewBox="0 0 1000 700"
         version="1.1"
         xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="extra">
        <polygon points="793.50,476.88,949.50,500.88,805.50,518.88"
                 fill="hsla(0, 0%, 100%, 0)"></polygon>
        <polygon points="793.50,476.88,949.50,500.88,805.50,518.88"
                 fill="hsla(0, 0%, 100%, 0)"></polygon>
        <polygon points="793.50,476.88,949.50,500.88,805.50,518.88"
                 fill="hsla(0, 0%, 100%, 0)"></polygon>
      </g>
      <g id="anis"
         ref="anis">
        <polygon v-for="ele in polygonData"
                 :points="parsePolygonStr(ele[0])"
                 :fill="ele[1]"/>
      </g>
    </svg>
    <div class="test"
         ref="test">test
    </div>
  </div>
</template>

<script>
  import {TweenMax, TimelineMax} from 'gsap'
  import {preData} from './data'

  export default {
    data() {
      return {
        polygonData: preData.preload.polygon
      }
    },
    methods: {
      parsePolygonStr(polygonStr, width = 1000, height = 700) {
        let pointsArr = polygonStr.split(/\s+|,\s/)
        return pointsArr.map(function (currentVal, index) {
          if (index % 2 === 0) {
            return (parseFloat(currentVal) * width / 100).toFixed(2)
          } else {
            return (parseFloat(currentVal) * height / 100).toFixed(2)
          }
        })
      }
    },
    mounted() {
      let tl = new TimelineMax({delay: 0.2})

      let anisPolygons = Array.from(this.$refs.anis.querySelectorAll('polygon'))
      anisPolygons.forEach((target, index) => {
        let tm = TweenMax.fromTo(target, 0.9, {attr: {fill: 'rgba(0,0,0,.7)'}}, {
          attr: {fill: 'rgba(200, 20, 20, .45)'},
          ease: 'Power0.easeNone',
          repeat: -1,
          yoyo: true
        })
        tl.add(tm, 0.9 - 0.04 * index)
      })

      setTimeout(() => {
        runMain()
      }, 3000)

      let _self = this
      let runMain = () => {
        let mapObj = {0: '#28282a', 1: '#111', 2: '#333', 3: '#222', 4: '#121212'}
        tl.clear()
        this.preData = preData.ready.polygon
        tl.add([
          TweenMax.to('#anis polygon', {
            attr: {
              fill: (index) => mapObj[index % 5]
            }
          }),
          TweenMax.to('.stage', {
            scale: 1,
            ease: 'Back.easeOut.config(1.7)'
          }),
          TweenMax.to('#anis polygon', 3, {
            attr: {
              points(index) {
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
            TweenMax.to('#anis polygon', 1, {
              attr: {
                points: function (index, target) {
                  let nextSpeciesPolygon = preData.preAni.polygon
                  return _self.parsePolygonStr(nextSpeciesPolygon[index][0])
                },
                fill: function (index, target) {
                  let nextSpeciesPolygon = preData.preAni.polygon
                  return nextSpeciesPolygon[index][1]
                }
              }
              // ease: Power2.easeInOut,
            }),
          )
          //   // 3，爆炸碎片
          .add(
            TweenMax.to('#anis polygon', 1, {
              attr: {
                points: function (index, target) {
                  let nextSpeciesPolygon = preData.ready.polygon
                  return _self.parsePolygonStr(nextSpeciesPolygon[index][0])
                },
                fill: function (index, target) {
                  let nextSpeciesPolygon = preData.ready.polygon
                  return nextSpeciesPolygon[index][1]
                }
              }
            }),
            '+=0.4'
          )
          // 4，“piece”logo
          .add(
            TweenMax.to('#anis polygon', 0.6, {
              attr: {
                points(index) {
                  let nextSpeciesPolygon = preData.title.polygon
                  return _self.parsePolygonStr(nextSpeciesPolygon[index][0])
                },
                fill(index) {
                  let nextSpeciesPolygon = preData.title.polygon
                  return nextSpeciesPolygon[index][1]
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
      position: absolute;
      left: 0;
      top: 0;
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