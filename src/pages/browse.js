import { useContent } from "../hooks";
import { selectionFilter } from "../utils";
import { BrowseContainer } from "../containers/browse";

export default function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  //console.log(series);

  const slides = selectionFilter({ series, films });

  return <BrowseContainer slides={slides} />;
}

// series and films required here to display
// also the SLIDES!!!
//passing all of these to BROWSE container
