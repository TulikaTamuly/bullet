function isTouching(car,wall){
    if (bullet.x - wall.x <bullet.width/2 + wall.width/2
      && wall.x - car.x < wall.width/2 + bullet.width/2
      && bullet.y - wall.y < wall.height/2 + bullet.height/2
      && wall.y - car.y < wall.height/2 + bullet.height/2) {
   return true
  }
  else {
   return false
  }
  }
