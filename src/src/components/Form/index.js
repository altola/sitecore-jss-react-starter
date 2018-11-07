import React from "react";
import { Text } from "@sitecore-jss/sitecore-jss-react";
import axios from "axios";

const inputFieldType =
  "/sitecore/system/Settings/Forms/Field-Types/Basic/Single-Line-Text";
const submitButton =
  "/sitecore/system/Settings/Forms/Field-Types/Structure/Submit-Button";

class FormElement extends React.Component {
  state = {
    elementData: {}
  };

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const value = event.target.value;
    const htmlPrefix = this.props.rendering.uid;
    const elementId = this.props.element.id;

    const elementData = {};
    elementData[`fxb.${htmlPrefix}.Fields.Index`] = elementId;
    elementData[`fxb.${htmlPrefix}.Fields[${elementId}].ItemId`] = elementId;
    elementData[`fxb.${htmlPrefix}.Fields[${elementId}].Value`] = value;

    this.setState({ elementData: elementData });

    this.props.onElementUpdated(elementId, elementData);
  }

  render() {
    const { element } = this.props;

    const fieldType = element.fields["Field Type"];
    const elementId = element.id;
    if (!fieldType) {
      return null;
    }
    if (fieldType.url === inputFieldType) {
      return (
        <input
          name={element.displayName}
          value={this.state.value}
          onChange={this.onChange}
          placeholder={element.fields["Placeholder Text"].value}
          type="text"
        />
      );
    }

    if (fieldType.url === submitButton) {
      const cssClass = element.fields["Css Class"].value;
      const title = element.fields["Title"].value;
      return <input type="submit" className={cssClass} value={title} />;
    }

    return null;
  }
}

class Form extends React.Component {
  state = {
    formData: new Map(),
    cookieSet: false
  };

  constructor(props) {
    super(props);
    this.updateElement = this.updateElement.bind(this);
  }

  updateElement(key, formElement) {
    const formData = this.state.formData;
    formData.set(key, formElement);
    this.setState({ formData });
  }

  componentDidMount() {
    axios
      .get("http://formsjss902/token/get", {
        params: { sc_apikey: "{2AD4E0FB-E442-4B01-B1C3-12C66651CF75}" }
      })
      .then(response => {
        this.setState({ cookieSet: true });
        console.log(response);
      })
      .catch(response => {
        this.setState({ cookieSet: false });
        console.log(response);
      });
  }

  render() {
    const { fields, rendering } = this.props;
    const htmlPrefix = rendering.uid;
    const formId = rendering.dataSource;

    const formBody = fields.formFields.map((item, index) => (
      <FormElement
        key={index}
        element={item}
        onElementUpdated={this.updateElement}
        {...this.props}
      />
    ));

    const requestFormValidation = (
      <input
        key={-1}
        name="__RequestVerificationToken"
        type="hidden"
        value={fields.formToken}
      />
    );
    formBody.push(requestFormValidation);

    return (
      <form
        id={`fxb_${htmlPrefix}_${formId}`}
        action={`http://jss902/formbuilder?fxb.FormItemId=${formId}&amp;fxb.HtmlPrefix=fxb.${htmlPrefix}`}
        encType="multipart/form-data"
        method="post"
      >
        {formBody}
      </form>
    );
  }
}

export default Form;
