import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={740.003}
    height={128}
    viewBox="0 0 195.792 33.867"
    {...props}
  >
    <g transform="translate(93.592 -42.826)">
      <image
        xlinkHref="data:image/png;base64,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"
        width={195.792}
        height={42.333}
        x={-93.591}
        y={34.359}
        preserveAspectRatio="none"
        style={{
          imageRendering: "optimizeQuality",
        }}
      />
      <path
        d="M-93.591 76.693H102.2V53.409h-1.587c-1.458 0-1.588.072-1.588.882 0 .55-.2.882-.529.882-.435 0-.53-.627-.53-3.527v-3.528h-2.292c-2.058 0-2.293-.073-2.293-.706 0-.941-1.055-.929-5.204.064l-3.263.78v2.93c0 2.89-.012 2.929-.882 2.929-.745 0-.882-.165-.882-1.058 0-1-.078-1.059-1.41-1.059-.777 0-1.412.16-1.412.353 0 .194-.318.353-.706.353-.47 0-.705-.235-.705-.706 0-.588-.235-.705-1.411-.705-1.176 0-1.411-.118-1.411-.706 0-.633-.236-.705-2.293-.705h-2.293v-1.059c0-.893-.138-1.058-.882-1.058-.486 0-.882-.159-.882-.353 0-.194-.477-.353-1.059-.353-.974 0-1.058-.098-1.058-1.234V44.59h-1.764c-.97 0-1.764-.159-1.764-.353 0-.194-.727-.353-1.616-.353-1.335 0-1.887.223-3.175 1.278l-1.559 1.277v4.324c0 3.413-.111 4.416-.529 4.763-.323.268-.53 1.041-.53 1.984 0 1.277-.114 1.544-.664 1.544-.874 0-1.088-.914-1.094-4.674l-.005-3.087h-2.255c-1.68 0-2.308.135-2.459.529-.134.35-.686.53-1.625.53h-1.422v2.469c0 2.234-.067 2.469-.706 2.469-.68 0-.705-.235-.705-6.526v-6.527h-1.059c-.823 0-1.058-.157-1.058-.705 0-.653-.235-.706-3.15-.706-2.33 0-3.287.138-3.679.53-.29.29-.937.528-1.436.528-.894 0-.907.04-.907 2.646v2.646h-2.822c-2.274 0-2.823.103-2.823.53 0 .329-.333.528-.882.528h-.881v7.056h-3.175v7.232c0 6.997-.023 7.232-.706 7.232-.47 0-.706-.235-.706-.706 0-.588-.235-.705-1.41-.705H19.65V56.584c0-11.994-.068-13.758-.529-13.758-.353 0-.53.353-.53 1.058 0 .824-.156 1.059-.705 1.059-.553 0-.705-.235-.705-1.09 0-1.083-.008-1.088-1.5-.851-5.492.87-8.965 5.927-9.714 14.143-.234 2.564-.314 2.775-1.133 2.966-.681.158-.908.464-.993 1.338-.06.623-.248 1.133-.416 1.133-.406 0-1.414-1.024-1.414-1.437 0-.18-1.107-.327-2.46-.327H-2.91l.212-1.059.211-1.058H-7.514v1.764c0 1.646-.059 1.764-.882 1.764-.85 0-.882-.082-.882-2.293v-2.293h-3.88v8.466h-1.764c-1.646 0-1.764-.058-1.764-.882 0-.744-.165-.881-1.058-.881h-1.059v-5.292h-4.586v7.055h-1.764c-1.528 0-1.763-.094-1.763-.705 0-.601-.236-.706-1.588-.706h-1.587v3.528h-1.412c-1.332 0-1.41-.059-1.41-1.058v-1.059h-4.234v-1.058c0-1.019-.059-1.058-1.588-1.058-1.175 0-1.587-.137-1.587-.53 0-.406-.45-.529-1.94-.529h-1.94v1.764c0 1.647-.06 1.764-.883 1.764-.548 0-.881-.2-.881-.529 0-.382-.392-.53-1.412-.53-.776 0-1.41-.158-1.41-.352 0-.753-1.364-.345-1.475.441-.1.706-.3.787-1.789.737-1.634-.056-1.676-.032-1.676.987v1.044l-1.562-1.075c-1.867-1.285-3.73-1.47-3.73-.37 0 .392-.234.706-.528.706a.53.53 0 0 1-.53-.53c0-.329-.333-.529-.882-.529-.833 0-.881.106-.881 1.94 0 1.921-.011 1.94-1.059 1.94-.94 0-1.058-.117-1.058-1.058v-1.058h-4.939c-4.155 0-4.939-.084-4.939-.53 0-.328-.333-.528-.882-.528-.549 0-.882-.2-.882-.53 0-.382-.392-.529-1.41-.529h-1.412v-1.587c0-1.58-.007-1.588-1.235-1.588-1 0-1.234.135-1.234.706 0 .512-.236.706-.859.706-.674 0-.882.208-.97.97l-.112.97h-10.76v5.203z"
        style={{
          fill: "#000",
          strokeWidth: 0.352778,
        }}
      />
    </g>
  </svg>
)
export default SvgComponent
