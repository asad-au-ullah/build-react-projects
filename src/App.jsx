import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreButton from "./components/load-more-data";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";

function App() {
  return (
    <>
      {/* Accordian */}
      {/* <Accordian /> */}

      {/* Random Color Generator */}
      {/* <RandomColor /> */}

      {/* Star Rating */}
      {/* <StarRating noOfStars={10} /> */}

      {/* Image Slider */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* Load More Button */}
      {/* <LoadMoreData /> */}

      {/* Tree View */}
      <TreeView />
    </>
  );
}

export default App;
