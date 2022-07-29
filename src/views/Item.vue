<script setup>
import { ref } from 'vue'
import AddToCartBtn from '../components/AddToCartBtn.vue';

const items = [
  {
    title: 'LAUNCH',
    text: [
      {
        title: 'Announced',
        desc: ['2021, September 14']
      },
      {
        title: 'Status',
        desc: ['Available. Released 2021, Sep tember 24']
      },
    ]
  },
  {
    title: 'BODY',
    text: [
      {
        title: 'Dimensions',
        desc: ['160.8x78.1x7.7 mm(6.33x3.07x0.30 in)']
      },
      {
        title: 'Weight',
        desc: ['240g(8.47 oz)']
      },
      {
        title: 'Build',
        desc: ['Glass front(Gorilla Glass),glass back(Gorilla Glass),stainless steel frame']
      },
      {
        title: 'SIM',
        desc: ['Single SIM(Nano-SIM and/or eSIM)or Dual S   IM(Nano-SIM/eSIM,dual stand-by)', 'IP68 dust/water resistant(up to 6m for 30 mins)', 'Apple Pay(Visa,MasterCard,AMEX certified)']
      },
    ]
  },
  {
    title: 'DISPLAY',
    text: [
      {
        title: 'Type',
        desc: ['Super Retina XDR OLED,120Hz,HDR10,Dolby Vision,1000 nits(HBM),1200 nits(peak)']
      },
      {
        title: 'Size',
        desc: ['6.7 inches,109.8 cm²(~87.4%screen-to-body ratio)']
      },
      {
        title: 'Build',
        desc: ['1284x2778 pixels,19.5:9ratio(~458 ppi density)']
      },
      {
        title: 'Protectoin',
        desc: ['Scratch-resistant ceramic glass,oleophobic coating', 'Wide color gamut', 'True-tone']
      },
    ]
  },
  {
    title: 'PLATFORM',
    text: [
      {
        title: 'OS',
        desc: ['iOS 15, up to iOS 15.5, planned upgrade to iOS 16']
      },
      {
        title: 'Chipset',
        desc: ['Apple A15 Bionic (5 nm)']
      },
      {
        title: 'CPU',
        desc: ['Hexa-core (2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard)']
      },
      {
        title: 'GPU',
        desc: ['Apple GPU(5 - core graphics)']
      },
    ]
  },
  {
    title: 'MEMORY',
    text: [
      {
        title: 'Card Slot',
        desc: ['No']
      },
      {
        title: 'Internal',
        desc: ['256GB  6GB RAM NVME']
      },
    ]
  },
  {
    title: 'MAIN CAMERA',
    text: [
      {
        title: 'Quad',
        desc: ['12 MP, f/1.5, 26mm (wide), 1.9µm, dual pixel PDAF, sensor-shift OIS', '12 MP, f/2.8, 77mm (telephoto), PDAF, OIS, 3x optical zoom', '12 MP, f/1.8, 13mm, 120˚ (ultrawide), PDAF', 'TOF 3D LiDAR scanner (depth)']
      },
      {
        title: 'Features',
        desc: ['Dual-LED dual-tone flash, HDR (photo/panorama)']
      },
      {
        title: 'Video',
        desc: ['4K@24/30/60fps, 1080p@30/60/120/240fps, 10-bit HDR, Dolby Vision HDR (up to 60fps), ProRes, Cinematic mode, stereo sound rec.']
      },
    ]
  },
  {
    title: 'SELFIE CAMERA',
    text: [
      {
        title: 'Dual',
        desc: ['12 MP, f/2.2, 23mm (wide), 1/3.6"', 'SL 3D, (depth/biometrics sensor)']
      },
      {
        title: 'Features',
        desc: ['HDR']
      },
      {
        title: 'Video',
        desc: ['4K@24/25/30/60fps, 1080p@30/60/120fps, gyro-EIS']
      },
    ]
  },
  {
    title: 'SOUND',
    text: [
      {
        title: 'Loudspeaker',
        desc: ['Yes, with stereo speakers']
      },
      {
        title: '3.5mm jack',
        desc: ['No']
      },
    ]
  },
  {
    title: 'COMMS',
    text: [
      {
        title: 'WLAN',
        desc: ['Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot']
      },
      {
        title: 'Bluetooth',
        desc: ['5.0, A 2DP, LE']
      },
      {
        title: 'GPS',
        desc: ['Yes, with A-GPS, GLONASS, GALILEO, BDS, QZSS']
      },
      {
        title: 'NFC',
        desc: ['Yes']
      },
      {
        title: 'Radio',
        desc: ['No']
      },
      {
        title: 'USB',
        desc: ['Lightning, USB 2.0']
      },
    ]
  },
  {
    title: 'FEATURES',
    text: [
      {
        title: 'Sensors',
        desc: ['Face ID, acceler ometer, gyro, proximity, compass, barometer', 'Ultra Wideband (UWB) support']
      },
    ]
  },
  {
    title: 'BATTERY',
    text: [
      {
        title: 'Type',
        desc: ['Li-Ion 4352 mAh, non-removable (16.75 Wh)']
      },
      {
        title: 'Chargin',
        desc: ['Fast charging (27W, unofficial rating), 50% in 30 min (advertised)', 'USB Power Delivery 2.0', 'MagSafe wireless charging 15W', 'Qi magnetic fast wireless charging 7.5W']
      },
    ]
  },
  {
    title: 'MISC',
    text: [
      {
        title: 'Colors',
        desc: ['Graphite, Gold, Silver, Sierra Blue, Alpine Green']
      },
      {
        title: 'Models',
        desc: ['A2643, A2484, A2641, A2644, A2645, iphone14,3']
      },
      {
        title: 'SAR',
        desc: ['1.18 W/kg (head)     1.20 W/kg (body)']
      },
      {
        title: 'SAR EU',
        desc: ['0.99 W/kg (head)     0.98 W/kg (body)']
      },
      {
        title: 'Price',
        desc: ['$ 1,023.99 / € 1,208.00 / £ 999.00 / ₹ 126,900 / Rp 23,681,736']
      },
    ]
  },
  {
    title: 'TESTS',
    text: [
      {
        title: 'Performance',
        desc: ['AnTuTu: 801691 (v9)', 'GeekBench: 4706 (v5.1)', 'GFXBench: 60fps (ES 3.1 onscreen)']
      },
      {
        title: 'Display',
        desc: ['Contrast ratio: Infinite (nominal)']
      },
      {
        title: 'Camera',
        desc: ['Photo / Video']
      },
      {
        title: 'Loudspeaker',
        desc: ['-24.0 LUFS (Very good)']
      },
      {
        title: 'Battery life',
        desc: ['Endurance rating 121h']
      },
    ]
  },

]

const currentImage = ref(1)

const images = [
  {
    id: 1,
    path: './assets/item/img1.png',
  },
  {
    id: 2,
    path: './assets/item/img2.png',
  },
  {
    id: 3,
    path: './assets/item/img3.png',
  },
  {
    id: 4,
    path: './assets/item/img4.png',
  },
]

const changeImage = (id) => {
  currentImage.value = id
}

</script>

<template>
  <section class="flex flex-col lg:flex-row justify-center items-center p-4 py-12 gap-4 max-w-screen-xl mx-auto">

    <div class="flex justify-center gap-4">
      <div class="flex flex-col gap-2">
        <div v-for="image in images">
          <div @click="changeImage(image.id)" class="w-12 sm:w-16 cursor-pointer border border-slate-300"
            :class="{ 'border-primary': currentImage === image.id }"><img :src="image.path" alt="iphone">
          </div>
        </div>
      </div>
      <div>
        <img :src="'../../public/assets/item/img' + currentImage + '.png'" alt="iphone"
          style="width: 500px; aspect-ratio: 4/5; object-fit: cover; ">
      </div>
    </div>

    <div class="max-w-[60ch] flex flex-col gap-4 m-auto">
      <h2 class="text-xl font-bold">
        Apple iPhone 13 Pro Max
        (256 GB, Alpine Green)
      </h2>
      <ul class="list-disc pl-5 font-base mb-4 text-justify">
        <li>6.7-inch Super Retina XDR display witd ProMotion for a faster, more responsive feel</li>
        <li>Cinematic mode adds shallow depth of field and shifts focus automatically in your videos</li>
        <li> Pro camera system with new 12MP Telephoto, Wide, and Ultra Wide cameras; LiDAR Scanner; 6x optical zoom
          range;
          macro photography; Photographic Styles, ProRes video, Smart HDR 4, Night mode, Apple ProRAW, 4K Dolby Vision
          HDR recording</li>
        <li>12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording</li>
        <li>A15 Bionic chip for lightning-fast performance</li>
        <li>Up to 28 hours of video playback, the best battery life ever in an iPhone</li>
        <li>Durable design with Ceramic Shield</li>
        <li>Industry-leading IP68 water resistance</li>
        <li>5G capable</li>
        <li>iOS 15 packs new features to do more with iPhone than ever before</li>
      </ul>
      <div class="relative h-10">
        <AddToCartBtn />
      </div>
    </div>
  </section>

  <section class="md:p-4 py-10">
    <div class="max-w-screen-2xl mx-auto w-full">
      <ul class="flex flex-col gap-1">
        <li v-for="item in items" class="flex flex-col md:flex-row p-4 w-full bg-slate-50 ">
          <div class="min-w-[11rem]">
            <h3 class="text-base md:text-lg pb-2 md:pb-0 font-bold">{{ item.title }}</h3>
          </div>
          <div class="w-full">
            <div v-for="(text, index) in item.text" :class="{ 'border-b-2': item.text.length - 1 !== index }"
              class="flex w-full border-slate-200 items-center">
              <div class="min-w-[6.5rem] min-md:w-[130px]">
                <h4 class="text-sm md:text-base font-semibold">
                  {{ text.title }}
                </h4>
              </div>
              <div>
                <h5 v-for="(desc, idx) in text.desc"
                  :class="{ 'border-b-[1px]': text.desc.length > 1 && text.desc.length - 1 !== idx }"
                  class=" border-slate-200 text-sm md:text-base text-justify">{{
                      desc
                  }}</h5>
              </div>
            </div>
          </div>
        </li>
      </ul>

    </div>


  </section>
</template>

<style>
</style>
