import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { pathProject } from "../App";
import axios from 'axios';
import { useState, useEffect } from 'react';

import { changeTextArea } from '../textArea/textarea';

/*const data = {
  "id": "root",
  "name": "root",
  "children": [
      {
          "id": "1",
          "name": ".git",
          "children": []
      },
      {
          "id": "2",
          "name": "file1",
          "children": []
      },
      {
          "id": "3",
          "name": "file2",
          "children": []
      },
      {
          "id": "4",
          "name": "file3",
          "children": []
      },
      {
          "id": "5",
          "name": "folder",
          "children": []
      },
      {
          "id": "6",
          "name": "folder4",
          "children": [
              {
                  "id": "7",
                  "name": "file7",
                  "children": []
              }
          ]
      },
      {
          "id": "8",
          "name": "pom.xml",
          "children": []
      }
  ]
}*/

export default function RichObjectTreeView() {
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name} onClick= {
      () => {
        console.log(nodes.path)
        changeTextArea(nodes.path)
      }
    }>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  const [data, setData] = React.useState({});
  const [isOpen, setIsOpen] = React.useState(true);
   
  useEffect(() => {
    axios({
        method: 'post',
        url: 'http://localhost:9000/arbofile',
        data: {
          path : "null",
          rootpath : "null"
        }
    }).then (function (response) {
        setData(response.data);
        setIsOpen(false);
        console.log(response.data);
    })
  }, []);

  if (isOpen) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return (
    <TreeView
      aria-label="rich object"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 110, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      {renderTree(data)}
      <div> 
        <p>{pathProject}</p>
      </div>
    </TreeView>
  );
}