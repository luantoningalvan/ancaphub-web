import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { generate } from "shortid";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import LibraryCard from "../../components/library/LibraryCard";
import ComingSoon from "../../components/alerts/ComingSoon";

import { loadCategoriesRequest } from "../../redux/actions/categories";
import { getAuthorsRequest } from "../../redux/actions/authors";
import { getItemsRequest } from "../../redux/actions/library";

import { LoadContent } from "../../components";
import {
  Container,
  Hero,
  Card,
  CardHeader,
  Tab,
  Tabs,
  Paper,
  Grid,
  ListItem,
  Button,
  CardFooter,
} from "snake-ui";
import { FiPlusCircle } from "react-icons/fi";

import {
  LibraryContainer,
  LibrarySidebarContainer,
  LibraryContentContainer,
  LibrarySidebarMenu,
} from "./styles";

const Library = () => {
  const [type, setType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");

  const { items: categories, loading: categoriesLoading } = useSelector(
    (state: any) => state.categories
  );
  const { items: libraryItems, loading: libraryLoading } = useSelector(
    (state: any) => state.library
  );
  const { items: authors, loading: authorsLoading } = useSelector(
    (state: any) => state.authors
  );

  const dispatch = useDispatch();
  const { type: typeParam }: { type: string } = useParams();
  const { push } = useHistory();

  useEffect(() => {
    dispatch(loadCategoriesRequest());
    dispatch(getAuthorsRequest());
  }, [dispatch]);

  useEffect(() => {
    setType(() => typeParam);
  }, [typeParam]);

  useEffect(() => {
    const types: { [key: string]: string } = {
      articles: "article",
      books: "book",
      videos: "video",
    };
    dispatch(
      getItemsRequest({
        type: types[type],
        category: selectedCategory,
        author: selectedAuthor,
      })
    );
  }, [type, selectedCategory, selectedAuthor, dispatch]);

  return (
    <Container>
      <Hero
        title={<FormattedMessage id="common.library" />}
        description={<FormattedMessage id="home.features.0" />}
        actions={
          <Button onClick={() => push("/library/contribute")}>
            <FiPlusCircle />
            Contribuir
          </Button>
        }
      />

      <LibraryContainer>
        <LibrarySidebarContainer>
          <Card>
            <CardHeader
              title={<FormattedMessage id="common.categories" />}
              style={{ paddingBottom: 8 }}
            />

            <LibrarySidebarMenu>
              <LoadContent loading={categoriesLoading}>
                <ListItem
                  label={<FormattedMessage id="common.all" />}
                  current={selectedCategory === ""}
                  onClick={() => setSelectedCategory("")}
                />
                {categories.map((category: any) => (
                  <ListItem
                    key={category.name}
                    label={category.name}
                    current={selectedCategory === category.id}
                    onClick={() => setSelectedCategory(category.id)}
                  />
                ))}
              </LoadContent>
            </LibrarySidebarMenu>

            <CardFooter label="Ver Todas" />
          </Card>
          <Card style={{ marginTop: 16 }}>
            <CardHeader title="Autores" style={{ paddingBottom: 8 }} />
            <LibrarySidebarMenu>
              <LoadContent loading={authorsLoading}>
                <ListItem
                  label={<FormattedMessage id="common.all" />}
                  current={selectedAuthor === ""}
                  onClick={() => setSelectedAuthor("")}
                />
                {authors.map((author: any) => (
                  <ListItem
                    key={author.id}
                    label={author.name}
                    current={selectedAuthor === author.id}
                    onClick={() => setSelectedAuthor(author.id)}
                  />
                ))}
              </LoadContent>
            </LibrarySidebarMenu>
            <CardFooter label="Ver Todos" action={() => push("/authors")} />
          </Card>
        </LibrarySidebarContainer>
        <LibraryContentContainer>
          <Paper>
            <Tabs style={{ height: 48, padding: "0px 8px" }}>
              <Tab
                label={<FormattedMessage id="common.all" />}
                current={typeParam === undefined}
                onClick={() => push("/library")}
              />
              <Tab
                label={<FormattedMessage id="library.articles" />}
                current={typeParam === "articles"}
                onClick={() => push("/library/articles")}
              />
              <Tab
                label={<FormattedMessage id="library.books" />}
                current={typeParam === "books"}
                onClick={() => push("/library/books")}
              />
              <Tab
                label={<FormattedMessage id="library.videos" />}
                current={typeParam === "videos"}
                onClick={() => push("/library/videos")}
              />
            </Tabs>
          </Paper>
          <div style={{ marginTop: 16 }}>
            <LoadContent loading={libraryLoading}>
              {isEmpty(libraryItems) ? (
                <Paper padding>
                  <FormattedMessage id="library.noneFound" />
                </Paper>
              ) : (
                <Grid container spacing={2}>
                  {libraryItems.map((item: any) => (
                    <Grid item xs={12} md={6} lg={4} key={generate()}>
                      <LibraryCard item={item} />
                    </Grid>
                  ))}
                </Grid>
              )}
            </LoadContent>
          </div>
        </LibraryContentContainer>
      </LibraryContainer>
    </Container>
  );
};

export default Library;
