/* eslint-disable no-shadow */
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { FormattedMessage } from "react-intl";
import { FiSearch as SearchIcon } from "react-icons/fi";
import { uniqueId } from "lodash";
import { Button, Card, CardHeader, CardBody, Grid } from "snake-ui";

import MiniLibraryCard from "../../../../components/library/MiniLibraryCard";
import MiniUserCard from "../../../../components/users/MiniUserCard";
import { Sidebar, Toolbar } from "./styles";

const columnsFromBackend = {
  [uniqueId()]: {
    name: "A serem discutidos",
    items: [],
  },
  [uniqueId()]: {
    name: "Discutindo",
    items: [],
  },
  [uniqueId()]: {
    name: "Discutidos",
    items: [],
  },
};

const masterItems = [
  {
    id: uniqueId(),
    content: (
      <MiniLibraryCard
        item={{ title: "Teste", author: "Tofas", cover: null }}
      />
    ),
  },
  {
    id: uniqueId(),
    content: (
      <MiniUserCard user={{ name: "Luan", username: "luan", avatar: "" }} />
    ),
  },
];

const onDragEnd = (result: any, columns: any, setColumns: any) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (
    source.droppableId !== destination.droppableId &&
    destination.droppableId !== "master"
  ) {
    if (source.droppableId === "master") {
      const sourceColumn = masterItems;
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...masterItems];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems.map((item) => ({ ...item, id: uniqueId() })),
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems.map((item) => ({ ...item, id: uniqueId() })),
        },
      });
    } else {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    }
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

const GroupBoard = () => {
  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <div style={{ marginTop: 16 }}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        <Grid spacing={2} container>
          <Grid item xs={4}>
            <Sidebar>
              <div className="search">
                <FormattedMessage id="groups.board.searchComponent">
                  {(msg) => <input type="text" placeholder={String(msg)} />}
                </FormattedMessage>
                <SearchIcon />
              </div>

              <div>
                <Droppable droppableId="master">
                  {(provided) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{
                        padding: 4,
                        width: 250,
                      }}
                    >
                      {masterItems.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                userSelect: "none",
                                padding: 8,
                                margin: "0 0 8px 0",
                                minHeight: "50px",
                                borderRadius: 4,
                                backgroundColor: snapshot.isDragging
                                  ? "rgba(0,0,0,0.6)"
                                  : "rgba(0,0,0,0.2)",
                                color: "white",
                                ...provided.draggableProps.style,
                              }}
                            >
                              {item.content}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </Sidebar>
          </Grid>
          <Grid item>
            <Toolbar>
              <Button color="primary">Leituras</Button>
            </Toolbar>

            <div
              style={{
                display: "flex",
                width: "100%",
                height: "calc(100% - 50px)",
                paddingBottom: 16,
                overflowX: "scroll",
              }}
            >
              {Object.entries(columns).map(([columnId, column]) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginRight: 16,
                  }}
                  key={columnId}
                >
                  <Card>
                    <CardHeader>
                      <h3>{column.name}</h3>
                    </CardHeader>
                    <CardBody>
                      <Droppable droppableId={columnId} key={columnId}>
                        {(provided) => (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                              padding: 4,
                              width: 250,
                            }}
                          >
                            {column.items.map((item: any, index: number) => (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 8,
                                      margin: "0 0 8px 0",
                                      minHeight: "50px",
                                      borderRadius: 4,
                                      backgroundColor: snapshot.isDragging
                                        ? "rgba(0,0,0,0.6)"
                                        : "rgba(0,0,0,0.2)",
                                      color: "white",
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    {item.content}
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </DragDropContext>
    </div>
  );
};

export default GroupBoard;
