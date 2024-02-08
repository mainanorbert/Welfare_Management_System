from rest_framework import permissions

"""Creating custom permission class"""
class AllowUnauthenticated(permissions.BasePermission):
    def has_permission(self, req, view):
        return req.method in permissions.SAFE_METHODS