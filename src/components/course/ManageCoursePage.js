import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.course.id) {
      //Necessary  to populate from when  existing course is loaded directly
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    debugger;
    return this.setState({course: course});
  }

  saveCourse(event) {
    event.preventDefault();
    debugger;
    this.props.actions.saveCourse(this.state.course);
    this.context.router.push('/courses');
  }

  render() {
    return (
      <CourseForm
        allAuthors={this.props.authors}
        onSave={this.saveCourse}
        onChange={this.updateCourseState}
        course={this.state.course}
        errors={this.state.errors}
      />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//pull in the react router context, so router is available  on this.context.router
ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id;
  let course = {id:'', watchHref: '', title:'', authorId:'', length: '', category: ''};
  if (courseId && state.courses.length > 0) {
    const filteredCourses = state.courses.filter(course => course.id === courseId)
    course = filteredCourses.length ? filteredCourses[0] : null
  }
  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
  //debugger;
  return {
    course: course,
    authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(ManageCoursePage);
