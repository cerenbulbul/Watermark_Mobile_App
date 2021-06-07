
# Watermark Mobile Application 

### Group Members: 

- Ceren Bülbül - 20160808052
- Banu Duman - 20150807032

___

1. [ General Definition Of Digital Watermarking ](#Def)
2. [ History Of Watermarking ](#History)
3. [ Watermark Types ](#type)
4. [ Digital Watermarking Process (Life Cycle) ](#life)
5. [ Classification Watermarking Techniques](#Class) 
   * [Based on Human Perceptron](#human) 
      * [Visible](#Visible)
      * [Invisible](#invisible)
      * [Robust](#robust)
      * [Fragile](#fragile)
   * [Based on Domain](#dom) 
      * [Frequency Domain](#freq)
      * [Grayscale](#gray)
      * [Spatial Domain](#spa)
      * [BitStream Domain](#bit)
6. [ Implementation ](#Imp)
7. [ Demo ](#Demo)
   * [Demo on Web](#web)
   * [Demo on Android](#android)
   * [Demo on IOS](#ios)
8. [RESOURCES](#ref)


___

<a name="Def"></a>
## General Definition Of Digital Watermarking

A watermark is a logo that stands for watermark and prevents copying when placed on an image or image. Sometimes it can be used not as a logo, but as a special text. When using Watermark, you can block the copy or see the original author even if there is a copy. Sometimes the site logo and sometimes different names are placed on the image or in a blocking corner to create this purpose.

<p align="center">
  <img src="https://user-images.githubusercontent.com/36292743/120777238-be30c700-c52d-11eb-9c18-3ac59013b084.png"  />
</p>

The picture above is an example of a watermark. He embedded the logo (watermark) into the picture, making it less obvious. Thus, stealing the logo has become more difficult.


Watermark is a feature that is generally valid for transactions on the internet. Therefore, if you want to watermark any image you want to protect, you can easily do this from your computer. Watermark can be created very easily with any photo editing program. One of these programs is the "Watermark" application that we have implemented.

<a name="History"></a>
## History Of Watermarking

The term "Digital Watermark" was coined in 1992 by Andrew Tirkel and Charles Osborne. 

Watermarks are identification marks produced during the papermaking process. The first watermarks appeared in Italy in the 13th century, but their use quickly spread throughout Europe. Watermarks continue to be used today as manufacturer marks and to prevent counterfeiting.

<a name="type"></a>
## Watermark Types

* **Text:** The manuscripts must be protected and not stolen. Therefore, it is one of the watermark types. In the picture below, the watermark technique is used to prevent the text from being stolen. The image below is an example of a watermark made for the Text.


* **Image:** Images can be made more secure by using watermark techniques so that they are not copied or stolen. Some watermark techniques have been applied to the pictures in the image below and the pictures have been made reliable.


* **Audio:** Copying sounds can cause many problems nowadays. Therefore, watermark techniques are used to prevent the sounds from being copied. The following example shows how the watermark technique is applied to a sound.


* **Video:** Copying videos can cause many problems nowadays. Therefore, watermark techniques are used to prevent the videos from being copied.


<a name="life"></a>
##  Digital Watermarking Process (Life Cycle) 

<p align="center">
  <img src="https://user-images.githubusercontent.com/36292743/120812733-ed5b2e80-c555-11eb-8718-f8d2300704e8.png"  />
</p>


- **Embed :** In this part, the digital signal is embedded with the digital watermark. In Embedding, an algorithm accepts the host and the data to be embedded and produces a watermark signal. 


- **Attack :** İletilen medyanın değiştirildiği an, bir tehdit haline gelir ve filigran sistemine saldırı olarak adlandırılır. Filigranlı dijital sinyal iletilir veya saklanır, genellikle başka bir kişiye iletilir. Bu kişi değişiklik yaparsa buna saldırı denir.


- **Detection :** The detection of the watermark from the noisy signal which might have altered media (JPEG compression, rotation, cropping, and adding noise) another called is Protection or Extraction. Extraction/Detection is an algorithm that is  applied to the attacked signal to attempt to extract the watermark from it. If the signal was unmodified during the transmission, then the watermark still is present and it may be extracted. 



<a name="Class"></a>
## Classification Watermarking Techniques

There are some techniques applied to make watermarks. These techniques are schematized as follows.

<p align="center">
  <img src="https://user-images.githubusercontent.com/36292743/120808003-44aad000-c551-11eb-9101-f043d60d804d.png"  />
</p>


<a name="human"></a>
### Based on Human Perceptron


<a name="Visible"></a>
- **Visible** 

A watermark logo can be viewed as the property of the ownership. In the example shown below, the logo is visible. However, its opacity has been lowered. 

<p align="center">
  <img src="https://user-images.githubusercontent.com/36292743/120796890-0a870180-c544-11eb-9cb1-c4bbed77d04d.jpg"  width="350" height="200"  />
</p>


<a name="invisible"></a>
- **Invisible**

These watermarks are embedded in the media and use steganography technique. They are not visible by naked eyes. Distortion of embedded is too small to be noticed. A watermark can be extracted by authorized extraction software. The image below is an example made using invisible watermark techniques.

<p align="center">
  <img src="https://user-images.githubusercontent.com/36292743/120796722-d4e21880-c543-11eb-9df3-fa0565b62515.png"  />
</p>


<a name="fragile"></a>
- **Fragile**

In the Fragile Watermarks, watermark fails to be detected from the watermarked image after slight modification. These watermarks are destroyed by data manipulation. There must be a system which can detect all changes in the data if fragile watermarks are to be used.


<p align="center">
  <img src="https://user-images.githubusercontent.com/36292743/120804496-65712680-c54d-11eb-9b0e-e38142eecdf9.png"  width="500" height="200"/>
</p>


<a name="robust"></a>
- **Robust**


In the Robust watermark, the watermark resists different types of attack. Robust watermarks may be used in copy protection applications to carry copy and no access control information. In the example below, a watermark was made using the Robust feature.

Nowadays,there is an ever growing interest in copyright protection of multimedia content, thus digital watermarking techniques are widely practiced.


<p align="center">
  <img src="https://user-images.githubusercontent.com/36292743/120804873-cdc00800-c54d-11eb-9404-6560a4ab8111.jpg"  width="550" height="300"/>
</p>


<a name="dom"></a>
### Based on Domain


<a name="freq"></a>
- **Frequency Domain**

Adding or changing components of digital images can be transferred to other value domains. Embedding watermark schemes in frequency coefficients will produce higher robustness than embedding watermark schemes in the spatial domain. A watermarking scheme that uses frequency-based should embed a watermark in low-frequency order or medium frequencies. Embedding a watermark in a low frequency can produce a higher quality degradation of the watermarked image. Embedding a watermark in a high frequency makes it less robust and it is a higher probability of being lost when the watermarked images are compressed. Discrete Cosine Transform (DCT) and Waveland Transform can be given examples. In the picture below, a watermark was made using the Waveland Transform method. As can be seen from the picture, the image-decompositon was used while using the Waveland Transform method.


<p align="center">
  <img src="https://user-images.githubusercontent.com/36292743/120824351-0ae1c580-c561-11eb-8ca2-e75705430315.png"  width="500" height="250"/>
</p>


<a name="gray"></a>
- **Grayscale**


DCT algorithm helped us while converting the grayscale image to black and white. DCT is often used in signal and image processing, especially for lossy data compression, most of the signal information tends to be concentrated in a few low-frequency components of the DCT.DCT is used in JPEG image compression, MJPEG, MPEG, DV, and Theora video compression. There, the two-dimensional DCT of NxN blocks are computed and the results are quantized and entropy coded.


<p align="center">
  <img src="https://user-images.githubusercontent.com/23723097/121085541-aa65b900-c7ea-11eb-98fd-cf9110f1ce37.JPG"  width="500" height="250"/>
</p>


<a name="spa"></a>
- **Spatial Domain**

Digital watermarking manipulate the pixel in randomly selected values for adding watermark information. For example Least significant bitstream.  Randomly selected image data are dithered by a small amount according to a predefined algorithm, whose complexity may vary in practical systems. The algorithm defines the intensity and the position of the watermark on the original image. In the picture below, watermark was made using the Spatial Domain method. The logo is embedded in the middle of the picture and inside the picture. 

<p align="center">
  <img src="https://user-images.githubusercontent.com/36292743/120819560-5fcf0d00-c55c-11eb-9ab8-29c4e7f40a0b.png"  width="550" height="300"/>
</p>

<a name="bit"></a>
- **BitStream Domain**



<a name="Imp"></a>
## Implementation


<a name="Demo"></a>
## Demo

<a name="web"></a>
### Demo on Web

https://user-images.githubusercontent.com/36292743/120771945-7196bd00-c528-11eb-8ed7-b27264d9c78a.mp4


<a name="android"></a>
### Demo on Android


https://user-images.githubusercontent.com/36292743/120772426-faadf400-c528-11eb-809f-0dacf6e4ca2b.mp4


<a name="ios"></a>
### Demo on IOS


https://user-images.githubusercontent.com/36292743/120773901-66dd2780-c52a-11eb-900a-5f9c141dd412.mp4





<a name="ref"></a>
### RESOURCES

1. [Digital watermarking](https://www.slideshare.net/ankushkr007/digital-watermarking-15450118)
2. [IMAGE WATERMARKING](https://slidetodoc.com/image-processing-image-watermarking-editor-by-dr-ferda/)
3. [Digital Watermarking Classification : A Survey](http://www.ijcstjournal.org/volume-2/issue-5/IJCST-V2I5P2.pdf)
4. [Digital watermarking](https://en.wikipedia.org/wiki/Digital_watermarking)
5. [Digital Watermarking and its Types](https://www.geeksforgeeks.org/digital-watermarking-and-its-types/)
6. [Digital watermarking techniques for image security](https://www.researchgate.net/publication/335957317_Digital_watermarking_techniques_for_image_security_a_review)
7. [Visible Watermarking Technique Based on Human Visual System for Single Sensor Digital Cameras](https://www.hindawi.com/journals/scn/2017/7903198/)
8. [An Adaptive Watermarking Technique for the copyright of digital images and Digital Image Protection](https://www.researchgate.net/publication/224951680_An_Adaptive_Watermarking_Technique_for_the_copyright_of_digital_imagesand_Digital_Image_Protection)
9. [A robust and secure watermarking scheme based on singular values replacement](https://www.researchgate.net/publication/257767987_A_robust_and_secure_watermarking_scheme_based_on_singular_values_replacement)
10. [GRAYSCALE IMAGE WATERMARK DETECTION](https://www.researchgate.net/publication/324985989_GRAYSCALE_IMAGE_WATERMARK_DETECTION/link/5b52868a45851507a7b6eb9b/download)

