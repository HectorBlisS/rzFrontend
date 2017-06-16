import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Project from './oneProjectCard';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Link} from 'react-router-dom';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',

  },
  gridList: {
    width: '100%',
    overflowY: 'auto',
    margin: '.5% auto',
  },
  item:{
    paddingLeft:'2%',
  }
};





class UserProjects extends Component{
  render(){
    return(
      <div style={styles.root}>
        <GridList
          cols={1}
          style={styles.gridList}
          cellHeight={'auto'}


        >
        <Link to="/new">
          <FloatingActionButton style={{position:'absolute', right:0, top:250}}>
            <ContentAdd />
          </FloatingActionButton>
        </Link>

            {this.props.projects.map(
                (p) => {
                    return(
            <GridTile key={p.id} style={styles.item}>
                <Project  project={p} name={p.name}/>
                <div id="overlay"></div>
            </GridTile>
                    );
        }
            )}


            {/*<GridTile style={styles.item}>*/}
              {/*<Project/>*/}
            {/*</GridTile>*/}
            {/*<GridTile style={styles.item}>*/}
              {/*<Project/>*/}
            {/*</GridTile>*/}
            {/*<GridTile style={styles.item}>*/}
              {/*<Project/>*/}
            {/*</GridTile>*/}
            {/*<GridTile style={styles.item}>*/}
              {/*<Project/>*/}
            {/*</GridTile>*/}


        </GridList>
      </div>
    );
  }
}

export default UserProjects;
