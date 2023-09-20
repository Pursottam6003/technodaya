import SchemaForm from './schema-form'
import { FileInput, TextInput } from './InputComponents'
import { Categories } from '../../helpers/helpers'
import styles from './Form.module.scss'
import cx from 'classnames'

const sortedcatogries = Categories.slice().sort();

function originalPosition(i) {
  const element = sortedcatogries[i];
  const index = Categories.indexOf(element);
  return index;
}

const FormFC = ({
  category, setCategory,
  activityTitle, setActivityTitle,
  categoryFormData, handleInputChange, addPerson, removePerson,
  images, setImages,
  imgCaption, setImgCaption,
  display
}) => {
  const handleFileInput = (event) => {
    const { files } = event.target;
    if (files) {
      const images = [];
      Array.from(files).forEach(file => {
        images.push(file);
      });
      setImages(images);
    }
  }

  const categoriesSelect = sortedcatogries.map((category, i) => {
    if (i === 0) {
      return <option key={i} value={originalPosition(i)}>Select an activity category</option>
    } else {
      return <option key={i} value={originalPosition(i)}>{category}</option>
    }
  })

  return (
    <form
      id="activityForm"
      autoComplete="off"
      className={styles.form}
      style={{ display: display }}
    >
      <div className={styles['form-header']}>
        <input
          type="text"
          name="activityTitle"
          className={cx(styles['form-title'], styles['form-control'])}
          placeholder="New activity title here..."
          onChange={(e) => { setActivityTitle(e.target.value) }}
          value={activityTitle}
        />

        <div className={styles['form-select-container']}>
          <select
            type="number"
            name="category"
            className={cx(styles['category-select'], styles['form-control'])}
            required
            onChange={(e) => { setCategory(e.target.value) }}
            value={category}
          >
            {categoriesSelect}
          </select>
        </div>
      </div>

      {parseInt(category) !== 0 && (<>
        <SchemaForm
          currentCategory={category}
          formData={categoryFormData}
          handleInputChange={handleInputChange}
          addPerson={addPerson}
          removePerson={removePerson}
        />
        <p className={cx(styles['section-heading'], 'sub-label')}>Upload images (optional)</p>
        <FileInput
          key={`i${category}`}
          name='images'
          accept='image/png, image/webp, image/jpeg'
          attrs={{ multiple: true }}
          onChange={handleFileInput}
        />
        {images.length !== 0 && (
          <TextInput
            name='imgCaption'
            value={imgCaption}
            onChange={(e) => { setImgCaption(e.target.value) }}
            placeholder="Image caption"
          />
        )}
      </>)}
    </form>
  );
}

export default FormFC;
