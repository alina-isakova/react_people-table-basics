import React from 'react';
import { Person } from '../../types';
import { PersonLink } from '../PersonLink/PersonLink';
import { Link, useParams } from 'react-router-dom';

type Props = {
  people: Person[];
};

export const PeopleTable: React.FC<Props> = ({ people }) => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <table
      data-cy="peopleTable"
      className="table is-striped is-hoverable is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>

      <tbody>
        {people.map(person => {
          const personMother = people.find(p => person.motherName === p.name);
          const personFather = people.find(p => person.fatherName === p.name);
          const isLinkActive = slug === person.slug;

          return (
            <tr
              data-cy="person"
              key={person.slug}
              className={isLinkActive ? 'has-background-warning' : ''}
            >
              <td>
                <PersonLink person={person} />
              </td>

              <td>{person.sex}</td>
              <td>{person.born}</td>
              <td>{person.died}</td>

              {personMother ? (
                <td>
                  <Link
                    className="has-text-danger"
                    to={`/people/${personMother?.slug}`}
                  >
                    {person.motherName}
                  </Link>
                </td>
              ) : (
                <td>{person.motherName || '-'}</td>
              )}

              {personFather ? (
                <td>
                  <Link to={`/people/${personFather?.slug}`}>
                    {person.fatherName}
                  </Link>
                </td>
              ) : (
                <td>{person.fatherName || '-'}</td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
