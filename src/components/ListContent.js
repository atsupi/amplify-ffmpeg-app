
import ContentItem from "./ContentItem";
import "./ListContent.css";

function ListContent (props) {
    return (
        <div>
            <h2>ListContent</h2>
            <table id="table">
                <tbody>
                  <tr>
                    <th>id</th>
                    <th>contentBase</th>
                    <th>thumbnailPath</th>
                    <th>contentPath</th>
                    <th>name</th>
                    <th>owner</th>
                    <th>description</th>
                    <th>duration</th>
                    <th>Link</th>
                  </tr>
                  <ContentItem contentLists={props.contentItems} deleteitem={props.deleteitem}/>
                </tbody>
              </table>
        </div>
    )
}

export default ListContent;