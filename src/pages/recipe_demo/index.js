import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Card, CardGroup, Button } from "react-bootstrap";
import { recipelist } from "./recipes";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import headerPhoto from "../../assets/images/astro.jpg";

export const RecipeDemo = () => {
  const [recipeName, setRecipeName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState(recipelist);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleNameChange = (event) => {
    setRecipeName(event.target.value);
    document.getElementById("recipe-name-input").className = document
      .getElementById("recipe-name-input")
      .className.replace(" error", "");
  };

  const handleDescChange = (event) => {
    setDescription(event.target.value);
    document.getElementById("recipe-desc-input").className = document
      .getElementById("recipe-name-input")
      .className.replace(" error", "");
  };

  const handleIngredientChange = (event) => {
    setIngredients(String(event.target.value).split(","));
    document.getElementById("recipe-ingred-input").className = document
      .getElementById("recipe-name-input")
      .className.replace(" error", "");
  };

  function ImageHeader() {
    return (
      <article
        className="recipe-banner"
        style={{ backgroundImage: `url(${headerPhoto})` }}
      >
        <h1 className="recipe-banner-h1"> Recipe Organizer Demo </h1>
      </article>
    );
  }

  function RecipeCard({ recipeData, i }) {
    return (
      <Card className="card-grid" key={i}>
        <div className="recipe-img-div">
          <img
            className="card-img"
            src={recipeData.img.src}
            key={recipeData.img.id}
            alt={recipeData.img.alt}
          />
        </div>
        <Card.Body className="recipe-body">
          <Card.Title>{recipeData.name}</Card.Title>
          <Card.Text>{recipeData.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  return (
    <HelmetProvider>
      <div className="recipe-demo-div">
        <ImageHeader />
        <form className="recipe-form">
          <Container>
            <Row>
              <Col lg={2}>
                <label>Recipe Name:</label>
              </Col>
              <Col lg={10}>
                <input
                  type="text"
                  value={recipeName}
                  placeholder="Chicken Noodle Soup"
                  onChange={handleNameChange}
                  className="recipe-form-input"
                  id="recipe-name-input"
                />
              </Col>
            </Row>
            <Row>
              <Col lg={2}>
                <label>Recipe Description:</label>
              </Col>
              <Col lg={10}>
                <input
                  type="text"
                  value={description}
                  placeholder="A hearty chicken noodle soup recipe that will keep you warm even in the coldest of winter days!"
                  onChange={handleDescChange}
                  className="recipe-form-input"
                  id="recipe-desc-input"
                />
              </Col>
            </Row>
            <Row>
              <Col lg={2}>
                <label>Recipe Ingredients:</label>
              </Col>
              <Col lg={10}>
                <input
                  type="text"
                  value={ingredients}
                  placeholder="Chicken Breast, Water, Celery, Salt"
                  onChange={handleIngredientChange}
                  className="recipe-form-input"
                  id="recipe-ingred-input"
                />
              </Col>
            </Row>
            <Row>
              <Col lg={2}>
                <label>Recipe Photo:</label>
              </Col>
              <Col lg={10}>
                {selectedImage && (
                  <div>
                    <img
                      alt="not found"
                      width={"250px"}
                      src={URL.createObjectURL(selectedImage)}
                    />
                    <br />
                    <button onClick={() => setSelectedImage(null)}>
                      Remove
                    </button>
                  </div>
                )}
                <input
                  type="file"
                  name="myImage"
                  onChange={(event) => {
                    setSelectedImage(event.target.files[0]);
                  }}
                />
              </Col>
            </Row>
            <Row>
              <label>
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();

                    var inproperInput = false;
                    if (recipeName === "") {
                      document.getElementById("recipe-name-input").placeholder =
                        "Please give a name for your recipe!";
                      document.getElementById("recipe-name-input").className =
                        document.getElementById("recipe-name-input").className +
                        " error";
                      inproperInput = true;
                    }

                    if (description === "") {
                      document.getElementById("recipe-desc-input").placeholder =
                        "Please give a description for your recipe!";
                      document.getElementById("recipe-desc-input").className =
                        document.getElementById("recipe-desc-input").className +
                        " error";
                      inproperInput = true;
                    }

                    if (recipeName === "") {
                      document.getElementById(
                        "recipe-ingred-input"
                      ).placeholder =
                        "Please give the list of ingredients for your recipe!!";
                      document.getElementById("recipe-ingred-input").className =
                        document.getElementById("recipe-ingred-input")
                          .className + " error";
                      inproperInput = true;
                    }

                    if (inproperInput) return;

                    const newList = recipes.concat({
                      name: recipeName,
                      description: description,
                      favorite: false,
                      ingredients: ingredients,
                      instructions: [],
                      img: {
                        id: uuidv4(),
                        src: URL.createObjectURL(selectedImage),
                        alt: "",
                      },
                    });
                    console.log(newList);
                    setRecipes(newList);
                    setRecipeName("");
                    setDescription("");
                    setIngredients([]);
                    setSelectedImage(null);
                  }}
                >
                  Add Recipe!
                </button>
              </label>
            </Row>
          </Container>
        </form>
        <CardGroup className="recipe-group">
          <Row xs={2} md={5}>
            {recipes.map((data, i) => {
              return <RecipeCard recipeData={data} i={i} />;
            })}
          </Row>
        </CardGroup>
      </div>
    </HelmetProvider>
  );
};
