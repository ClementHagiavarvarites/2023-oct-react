import React, { useState } from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';

import './ParkingLotForm.css';

const PRIORITIES = {
  High: 'High',
  Medium: 'Medium',
  Low: 'Low'
}

export default function ParkingLotForm({ addItem }) {

    const [date, setDate] = useState('2024-02-22');
    const [link, setLink] = useState('http://127.0.0.1');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(PRIORITIES.Medium);

    function handleDateChange(e) {
      setDate(e.target.value);
    }

    function handleLinkChange(e) {
      setLink(e.target.value);
    }

    function handleDescriptionChange(e) {
      setDescription(e.target.value);
    }

    function handlePriorityChange(e) {
      setPriority(e.target.value);
    }

    function handleSubmit(e) {
      e.preventDefault();
      let [y, M, d] = date.split('-');
      let formattedDate = `${M}/${d}/${y}`;
      addItem(formattedDate, link, description, priority);
      setDate('');
      setLink('');
      setDescription('');
      setPriority(PRIORITIES.Medium);
    }
    
  return (
    <Form data-bs-theme="dark" className="parking-lot-form" onSubmit={handleSubmit}>
      <FormGroup className="parking-lot-row">
        <Label htmlFor="link-date">Date</Label>
        <Input
          id="link-date"
          name="date"
          type="date"
          value={date}
          onChange={handleDateChange}
          required />
      </FormGroup>
      <FormGroup className="parking-lot-row">
        <Label htmlFor="link-url">Link</Label>
        <Input
          id="link-url"
          name="url"
          type="url"
          value={link}
          onChange={handleLinkChange}
          required />
      </FormGroup>
      <FormGroup className="parking-lot-row">
        <Label htmlFor="link-description">Description</Label>
        <Input
          id="link-description"
          type="text"
          value={description}
          onChange={handleDescriptionChange}
          required
          name="description" />
      </FormGroup>
      <FormGroup className="parking-lot-row d-flex flex-wrap">
          <div>
            <Input
              name="radio-priority"
              type="radio"
              value={PRIORITIES.High}
              checked={priority === PRIORITIES.High}
              onChange={handlePriorityChange}
              id="prio-high" />
            {' '}
            <Label htmlFor="prio-high" className="me-3">High</Label>
          </div>
          <div>
            <Input
              name="radio-priority"
              type="radio"
              value={PRIORITIES.Medium}
              checked={priority === PRIORITIES.Medium}
              onChange={handlePriorityChange}
              id="prio-medium" />
            {' '}
            <Label htmlFor="prio-medium" className="me-3">Medium</Label>
          </div>
          <div>
            <Input
              name="radio-priority"
              type="radio"
              value={PRIORITIES.Low}
              checked={priority === PRIORITIES.Low}
              onChange={handlePriorityChange}
              id="prio-low" />
            {' '}
            <Label htmlFor="prio-low" className="me-3">Low</Label>
          </div>
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
